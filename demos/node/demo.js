const elAPI = require('./server.js');

//edit these values to see some data
const userId = 275385;
const teamId = 36631;

elAPI.getUserInfo(userId)
	.then((data) => {
		console.log('=========== getUserInfo ===========');
		console.log(data);
	})

elAPI.getRecentDonations(userId)
	.then((data) => {
		console.log('=========== getRecentDonations ===========');
		console.log(data);
	})

elAPI.getTeamInfo(teamId)
	.then((data) => {
		console.log('=========== getTeamInfo ===========');
		console.log(data);
	})

elAPI.getTeamDonations(teamId)
	.then((data) => {
		console.log('=========== getTeamDonations ===========');
		console.log(data);
	})

elAPI.getTeamRoster(teamId)
	.then((data) => {
		console.log('=========== getTeamRoster ===========');
		console.log(data);
	})