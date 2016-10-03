var elAPI = require('./server.js');

//edit these values to see some data
var userId = 219449;
var teamId = 29451;

elAPI.getUserInfo(userId, function(data){
	console.log(data);
})

elAPI.getRecentDonations(userId, function(data){
	console.log(data);
})

elAPI.getTeamInfo(teamId, function(data){
	console.log(data);
})

elAPI.getTeamDonations(teamId, function(data){
	console.log(data);
})