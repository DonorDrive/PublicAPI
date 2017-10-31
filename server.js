/**
 * extra-life-api
 * A node-based API module to get extended Extra Life info for Users and Teams!
 * @author Alex Muench (https://github.com/ammuench)
 */

const request = require('request');

const domain = 'https://www.extra-life.org/',
  formatJson = '&format=json',
  pageString = '&page={1}',
  donationsUrl = domain + 'index.cfm?fuseaction=donorDrive.participantDonations&participantID={0}' + formatJson + pageString,
  profileUrl = domain + 'index.cfm?fuseaction=donorDrive.participant&participantID={0}' + formatJson,
  teamDonationsUrl = domain + 'index.cfm?fuseaction=donorDrive.teamDonations&teamID={0}' + formatJson + pageString,
  teamProfileUrl = domain + 'index.cfm?fuseaction=donorDrive.team&teamID={0}' + formatJson,
  teamRosterUrl = domain + 'index.cfm?fuseaction=donorDrive.teamParticipants&teamID={0}' + formatJson + pageString;

if (!String.format) {
  String.format = function(format) {
    let args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] !== 'undefined'
        ? args[number]
        : match;
    });
  };
}

module.exports = {
  /**
   * Gets the extra life info of a user
   * @param {*} id - the user participant ID
   * @param {Boolean} team - whether to return team info or not
   * @return {Promise} result - the promise for completion of function (async)
   */
  getUserInfo: async (id, team = true) => {
    return new Promise((resolve, reject) => {
      let url = String.format(profileUrl, id);
      let userInfoJson = {};

      request(url, (error, response) => {
        if (!error && response) {
          userInfoJson = JSON.parse(response.body);
          userInfoJson.avatarImageURL = 'https:' + userInfoJson.avatarImageURL;
          userInfoJson.donateURL = domain + 'index.cfm?fuseaction=donate.participant&participantID=' + id;

          if (userInfoJson.teamID && team) {
            module.exports.getTeamInfo(userInfoJson.teamID).then((data) => {
              userInfoJson.teamName = data.name;
              userInfoJson.teamURL = data.teamURL;

              resolve(userInfoJson);
            }).catch((reason) => {
              reject(reason);
            });
          } else {
            resolve(userInfoJson);
          }
        } else {
          console.log('Error parsing userInfo URL');
          reject(new Error('There was an error trying to make your request'));
        }
      });
    });
  },
  /**
   * Gets the recent donations of a user
   * @param {*} id - the user participant ID
   * @param {Number} page - the page number to return
   * @return {Promise} result - the promise for completion of function (async)
   */
  getRecentDonations: async (id, page) => {
    return new Promise((resolve, reject) => {
      let userDonationsJson = {};
      let url = String.format(donationsUrl, id, (page || 1));

      request(url, (error, response) => {
        if (!error && response) {
          userDonationsJson.countDonations = response.headers['x-total-records'] || 0;
          userDonationsJson.countPages = Math.ceil(userDonationsJson.countDonations / 100);
          userDonationsJson.recentDonations = JSON.parse(response.body);

          resolve(userDonationsJson);
        } else {
          console.log('Error parsing recentDonations URL');
          reject(new Error('There was an error trying to make your request'));
        }
      });
    });
  },
  /**
   * Gets the team infomation of a specific team from extra life
   * @param {*} id - the team ID
   * @return {Promise} result - the promise for completion of function (async)
   */
  getTeamInfo: async (id, roster = true) => {
    return new Promise((resolve, reject) => {
      let url = String.format(teamProfileUrl, id);
      let teamInfoJson = {};

      request(url, (error, response) => {
        if (!error && response) {
          teamInfoJson = JSON.parse(response.body);
          teamInfoJson.avatarImageURL = 'http:' + teamInfoJson.avatarImageURL;
          teamInfoJson.teamURL = domain + 'index.cfm?fuseaction=donorDrive.team&teamID=' + id;
          if (roster) {
            module.exports.getTeamRoster(id).then((data) => {
              teamInfoJson.members = data.recentMembers.map((u) => {
                u.URL = String.format(domain + 'index.cfm?fuseaction=donorDrive.participant&participantID={0}', u.participantID);
                return u;
              });

              resolve(teamInfoJson);
            }).catch((reason) => {
              reject(reason);
            });
          } else {
            resolve(teamInfoJson);

          }
        } else {
          console.log('Error obtaining team info');
          reject(new Error('There was an error trying to make your request'));
        }
      });
    });
  },
  /**
   * Gets the donations made to a specific team
   * @param {*} id - the team ID
   * @param {Number} page - the page number to return
   * @return {Promise} result - the promise for completion of function (async)
   */
  getTeamDonations: async (id, page) => {
    return new Promise((resolve, reject) => {
      let teamDonationsJson = {};
      let url = String.format(teamDonationsUrl, id, (page || 1));

      request(url, function (error, response) {
        if (!error && response) {
          teamDonationsJson.countDonations = response.headers['x-total-records'] || 0;
          teamDonationsJson.countPages = Math.ceil(teamDonationsJson.countDonations / 100);
          teamDonationsJson.recentDonations = JSON.parse(response.body);

          resolve(teamDonationsJson);
        } else {
          console.log('Error parsing teamDonations URL');
          reject(new Error('There was an error trying to make your request'));
        }
      });
    });
  },
  /**
   * Gets the team roster of a specific extra life team
   * @param {*} id - the team ID
   * @param {Number} page - the page number to return
   * @return {Promise} result - the promise for completion of function (async)
   */
  getTeamRoster: async (id, page) => {
    return new Promise((resolve, reject) => {
      let teamRosterJson = {};
      let url = String.format(teamRosterUrl, id, (page || 1));

      request(url, (error, response) => {
        if (!error && response) {
          teamRosterJson.countMembers = response.headers['x-total-records'] || 0;
          teamRosterJson.countPages = Math.ceil(teamRosterJson.countMembers / 100);
          teamRosterJson.recentMembers = JSON.parse(response.body);

          for (let i = 0; i < teamRosterJson.recentMembers.length; i++) {
            teamRosterJson.recentMembers[i].avatarImageURL = 'https:' + teamRosterJson.recentMembers[i].avatarImageURL;
            teamRosterJson.recentMembers[i].profileURL = profileUrl + teamRosterJson.recentMembers[i].participantID;
          }

          resolve(teamRosterJson);
        } else {
          console.log('Error parsing teamRoster URL');
          reject(new Error('There was an error trying to make your request'));
        }
      });
    });
  }
};
