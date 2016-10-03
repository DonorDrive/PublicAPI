var elAPI = require('./server.js');

// elAPI.getUserInfo(219449, function(data){
// 	console.log(data);
// })

// elAPI.getRecentDonations(196186, function(data){
// 	console.log(data);
// })

// elAPI.getTeamInfo(29978, function(data){
// 	console.log(data);
// })

elAPI.getTeamDonations(27381, function(data){
	console.log(data);
})