/**
 * extra-life-api
 * A node-based API module to get extended Extra Life info for Users and Teams!
 * @author Alex Muench (https://github.com/ammuench)
 */

var request = require('request');

const domain = 'https://www.extra-life.org/',
	donationsUrl = domain + 'index.cfm?fuseaction=donorDrive.participantDonations&participantID=',
	profileUrl = domain + 'index.cfm?fuseaction=donorDrive.participant&participantID=',
	teamDonationsUrl = domain + 'index.cfm?fuseaction=donorDrive.teamDonations&teamID=',
	teamProfileUrl = domain + 'index.cfm?fuseaction=donorDrive.team&teamID=',
	teamRosterUrl = domain + 'index.cfm?fuseaction=donorDrive.teamParticipants&teamID=';

module.exports = {
	getUserInfo: function (id, callback) {
		var profileId = id;

		//generate URLs from id
		var url = profileUrl + profileId + '&format=json';

		//declare object for return
		var userInfoJson = {};

		request(url, function (error, response) {
			if (!error && response) {
				userInfoJson = JSON.parse(response.body);
				userInfoJson.avatarImageURL = 'https:' + userInfoJson.avatarImageURL;
				userInfoJson.donateURL = domain + 'index.cfm?fuseaction=donate.participant&participantID=' + id;

				if (userInfoJson.teamID) {
					module.exports.getTeamInfo(
						userInfoJson.teamID,
						function (data) {
							userInfoJson.teamName = data.name;
							userInfoJson.teamURL = data.teamURL;

							callback(userInfoJson);
						}
					);
				} else {
					callback(userInfoJson);
				}
			} else {
				console.log('Error parsing userInfo URL');
				callback({ status: 500, message: "There was an error trying to make your request" });
			}
		});
	},

	getRecentDonations: function (id, callback, page) {
		var userDonationsJson = {};

		var donationsId = id;

		var url = donationsUrl + donationsId + '&format=json&page=' + (page || 1);

		request(url, function (error, response) {
			if (!error && response) {
				userDonationsJson.countDonations = response.headers['x-total-records'] || 0;
				userDonationsJson.countPages = Math.ceil(userDonationsJson.countDonations / 100);
				userDonationsJson.recentDonations = JSON.parse(response.body);

				callback(userDonationsJson);
			} else {
				console.log('Error parsing recentDonations URL');
				callback({ status: 500, message: "There was an error trying to make your request" });
			}
		});
	},

	getTeamInfo: function (id, callback) {
		var teamInfoId = id;

		var url = teamProfileUrl + teamInfoId + '&format=json';

		var teamInfoJson = {};

		request(url, function (error, response) {
			if (!error && response) {
				teamInfoJson = JSON.parse(response.body);
				teamInfoJson.avatarImageURL = 'http:' + teamInfoJson.avatarImageURL;
				teamInfoJson.teamURL = domain + 'index.cfm?fuseaction=donorDrive.team&teamID=' + id;

				callback(teamInfoJson);
			} else {
				console.log('Error obtaining team info');
				callback({ status: 500, message: "There was an error trying to make your request" });
			}
		});
	},

	getTeamDonations: function (id, callback, page) {
		var teamDonationsJson = {};

		var teamId = id;

		var url = teamDonationsUrl + teamId + '&format=json&page=' + (page || 1);

		request(url, function (error, response) {
			if (!error && response) {
				teamDonationsJson.countDonations = response.headers['x-total-records'] || 0;
				teamDonationsJson.countPages = Math.ceil(teamDonationsJson.countDonations / 100);
				teamDonationsJson.recentDonations = JSON.parse(response.body);

				callback(teamDonationsJson);
			} else {
				console.log('Error parsing teamDonations URL');
				callback({ status: 500, message: "There was an error trying to make your request" });
			}
		});
	},

	getTeamRoster: function (id, callback, page) {
		var teamRosterJson = {};

		var teamId = id;

		var url = teamRosterUrl + teamId + '&format=json&page=' + (page || 1);

		request(url, function (error, response) {
			if (!error && response) {
				teamRosterJson.countMembers = response.headers['x-total-records'] || 0;
				teamRosterJson.countPages = Math.ceil(teamRosterJson.countMembers / 100);
				teamRosterJson.recentMembers = JSON.parse(response.body);

				for(var i = 0; i < teamRosterJson.recentMembers.length; i++) {
					teamRosterJson.recentMembers[i].avatarImageURL = 'https:' + teamRosterJson.recentMembers[i].avatarImageURL;
					teamRosterJson.recentMembers[i].profileURL = profileUrl + teamRosterJson.recentMembers[i].participantID;
				}

				callback(teamRosterJson);
			} else {
				console.log('Error parsing teamRoster URL');
				callback({ status: 500, message: "There was an error trying to make your request" });
			}
		});
	}
}





