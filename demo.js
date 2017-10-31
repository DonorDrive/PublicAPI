var elAPI = require('./server.js');

//edit these values to see some data
var userId = 275385;
var teamId = 36631;

elAPI.getUserInfo(userId, function(data){
	console.log('=========== getUserInfo ===========');
	console.log(data);
})

elAPI.getRecentDonations(userId, function(data){
	console.log('=========== getRecentDonations ===========');
	console.log(data);
})

elAPI.getTeamInfo(teamId, function(data){
	console.log('=========== getTeamInfo ===========');
	console.log(data);
})

elAPI.getTeamDonations(teamId, function(data){
	console.log('=========== getTeamDonations ===========');
	console.log(data);
})

elAPI.getTeamRoster(teamId, function(data){
	console.log('=========== getTeamRoster ===========');
	console.log(data);
})