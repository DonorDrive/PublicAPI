/**
 * extra-life-api
 * A node-based API module to get extended Extra Life info for Users and Teams!
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
			if (!error && response) {
				userInfoJson = JSON.parse(response.body);
				userInfoJson.avatarImageURL = 'http:' + userInfoJson.avatarImageURL;

				request(profileUrl, function (error, response, html) {
					if (!error && response) {
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
		var donationsUrl = 'http://www.extra-life.org/index.cfm?fuseaction=donorDrive.participantDonations&participantID=' + donationsId + '&format=json';

		request(donationsUrl, function (error, response) {
			if (!error && response) {
				userDonationsJson = JSON.parse(response.body);

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
			if(error || !response) {
				console.log('Error obtaining team info');
				callback({ status: 500, message: "There was an error trying to make your request" });
			}

			teamInfoJson = JSON.parse(response.body);
			teamInfoJson.avatarImageURL = 'http:' + teamInfoJson.avatarImageURL;
			teamInfoJson.teamURL = teamUrl;

			request(teamRosterUrl, function (error, response, html) {
				if (!error && response) {
					var $ = cheerio.load(html);

					//push array to members key for use in following each function
					teamInfoJson.members = [];

					$('#team tbody tr').each(function (i, elem) {
						var data = $(this).children('td').children('a');
						var memberObj = { name: "", isTeamCaptain: false, raised: "", URL: "", pID: "", image: "" };
						memberObj.name = data.children('span').children('strong.block').text();
						memberObj.name = memberObj.name.replace(/(\r\n\t|\n|\r|\t)/gm, "").trim();
						if (memberObj.name.indexOf('Team Captain') > -1) {
							memberObj.name = memberObj.name.split('Team Captain')[0].trim();
							memberObj.isTeamCaptain = true;
						}
						memberObj.raised = parseFloat(data.children('span').children('.gray').children('small:first-child').children('strong').text().split('$')[1].replace(/,/g, ''));
						var memberURL = data.attr('href');
						memberObj.URL = memberURL;
						memberObj.pID = parseInt(memberURL.split('participantID=')[1]);
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

	// getTeamDonations: function (id, callback) {
	// 	var teamId = id;

	// 	var teamRosterURL = 'http://www.extra-life.org/index.cfm?fuseaction=donorDrive.teamParticipants&teamID=' + teamId + '&format=json';

	// 	var donations = [];

	// 	request(teamRosterURL, function (error, response) {
	// 		var rosterList = JSON.parse(response.body);
	// 		for (var i = 0, rosterLen = rosterList.length; i < rosterLen; i++) {
	// 			var userName = rosterList[i].displayName;
	// 			var donationUrl = 'http://www.extra-life.org/index.cfm?fuseaction=donorDrive.participantDonations&participantID=' + rosterList[i].participantID + '&format=json';

	// 			console.log(i, rosterList.length);

	// 			request(donationUrl, function (error, response) {
	// 				var userDonations = JSON.parse(response.body);
	// 				// var j = 0, donateLength = userDonations.length;
	// 				var donationsCount = 0;
	// 				for (var j = 0, len = userDonations.length; j < len; j++) {
	// 					userDonations[j].donatedTo = userName;
	// 					donations.push(userDonations[j]);

	// 					donationsCount = donations.length;

	// 					//Bit of a janky fix, but since we can have a TON of calls running async here, 
	// 					//we check to see if the donations length has checked every 50ms.  Once they
	// 					//have shown to be equal, we send the callback data
	// 					timeout = setTimeout(function () {
	// 						if (donationsCount === donations.length) {
	// 							console.log('they are equal')
	// 							var sortByDate = function (a, b) {
	// 								if (a.createdOn < b.createdOn) {
	// 									return 1
	// 								}
	// 								if (a.createdOn > b.createdOn) {
	// 									return -1
	// 								}
	// 								return 0;
	// 							}
	// 							clearTimeout
	// 							return callback(donations.sort(sortByDate));
							
	// 						}else{
	// 							console.log('notequal');
	// 						}
	// 					}, 500)
	// 				}
	// 			});

	// 		}


	// 	})
	// }
}





