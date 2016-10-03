/**
 * extra-life-api
 * A node-based API module to get Extra Life info for Users and Teams!
 * @author Alex Muench (https://github.com/ammuench)
 */

var request = require('request');
var cheerio = require('cheerio');

module.exports = {
	getUserInfo: function (id, callback) {
		var profileId = id;

		//generate URLs from id
		var profileUrl = 'http://www.extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=' + profileId;
		var jsonUrl = profileUrl + '&format=json';

		//declare object for return
		var userInfoJson = {};

		request(jsonUrl, function (error, response) {
			if (!error) {
				userInfoJson = JSON.parse(response.body);
				userInfoJson.avatarImageURL = 'http:' + userInfoJson.avatarImageURL;

				request(profileUrl, function (error, response, html) {
					if (!error) {
						var $ = cheerio.load(html);
						var name, image, donateURL, team, teamURL;

						$('.btn-support-card').filter(function () {
							donateURL = $(this).attr('href');
							userInfoJson.donateURL = donateURL;
						});

						$('.link-team').filter(function () {
							var data = $(this);
							team = data.text();
							teamURL = 'http://www.extra-life.org/' + data.attr('href');
							userInfoJson.teamName = team;
							userInfoJson.teamURL = teamURL;
						});

						callback(userInfoJson);

					} else {
						console.log('Error parsing userInfo URL');
						callback({ status: 500, message: "There was an error trying to make your request" });
					}
				});
			} else {
				console.log('Error parsing userInfo URL');
				callback({ status: 500, message: "There was an error trying to make your request" });
			}
		});
	},

	getRecentDonations: function (id, callback) {
		var userDonationsJson = { recentDonations: [] };

		var donationsId = id;

		var donationsUrl = 'http://www.extra-life.org/index.cfm?fuseaction=donorDrive.participantDonations&participantID=' + donationsId;

		request(donationsUrl, function (error, response, html) {
			if (!error) {
				var $ = cheerio.load(html);

				$('.donor-detail').each(function (i, elem) {
					var data = $(this);
					var donorObj = {};
					donorObj.name = data.children('strong').text();
					donorObj.name = donorObj.name.replace(/(\r\n\t|\n|\r|\t)/gm, "");
					donorObj.date = data.children('small').text();
					donorObj.date = donorObj.date.replace(/(\r\n\t|\n|\r|\t)/gm, "");
					donorObj.message = data.children('em').text();
					donorObj.message = donorObj.message.replace(/(\r\n\t|\n|\r|\t)/gm, "");
					userDonationsJson.recentDonations.push(donorObj);
				});

				callback(userDonationsJson);
			} else {
				console.log('Error parsing recentDonations URL');
				callback({ status: 500, message: "There was an error trying to make your request" });
			}
		});
	},

	getTeamInfo: function (id, callback) {

		var teamInfoId = id;

		var teamUrl = 'http://www.extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=' + teamInfoId;
		var teamJsonURL = 'http://www.extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=' + teamInfoId + '&format=json';
		var teamRosterUrl = 'http://www.extra-life.org/index.cfm?fuseaction=donorDrive.teamParticipants&teamID=' + teamInfoId;

		var teamInfoJson = {};

		request(teamJsonURL, function (error, response) {
			teamInfoJson = JSON.parse(response.body);
			teamInfoJson.avatarImageURL = 'http:' + teamInfoJson.avatarImageURL;
			teamInfoJson.teamURL = teamUrl;

			request(teamRosterUrl, function (error, response, html) {
				if (!error) {
					var $ = cheerio.load(html);

					//push array to members key for use in following each function
					teamInfoJson.members = [];

					$('#team tbody tr').each(function (i, elem) {
						var data = $(this).children('td').children('a');
						var memberObj = { name: "", teamCaptain: false, raised: "", URL: "", pID: "", image: "" };
						memberObj.name = data.children('span').children('strong.block').text();
						memberObj.name = memberObj.name.replace(/(\r\n\t|\n|\r|\t)/gm, "").trim();
						if(memberObj.name.indexOf('Team Captain') > -1){
							memberObj.name = memberObj.name.split('Team Captain')[0].trim();
							memberObj.teamCaptain = true;
						}
						memberObj.raised = data.children('span').children('.gray').children('small:first-child').children('strong').text();
						var memberURL = data.attr('href');
						memberObj.URL = memberURL;
						memberObj.pID = memberURL.split('participantID=')[1];
						memberObj.image = 'http:' + data.children('span').children('.member-avatar').attr('src');
						teamInfoJson.members.push(memberObj);
					});

					callback(teamInfoJson);
				} else {
					console.log('Error parsing teamInfo URL');
					callback({ status: 500, message: "There was an error trying to make your request" });
				}
			});
		})
	}
}








