var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.all('*', function(req, res, next){
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authentication, AdminAccess');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.get('/usergoal/:id', function(req, res){
	var userGoalsJson = { goal : "", raised : ""};

	var setKey = function(key, value){
		userGoalsJson[key.toString()] = value;
		// console.log(key + ': ' + userGoalsJson[key.toString()]);
		// console.log('set key value');
	}

	var goalId = req.params.id;

	var goalUrl = 'http://www.extra-life.org/index.cfm?fuseaction=widgets.ajaxWidgetCompileHTML&callback=jsonpCallback&language=en&participantid0=' + goalId + '&eventid0=525&type0=thermometer&currencyformat0=none&orientation0=horizontal&participantid1=' + goalId + '&eventid1=525&type1=participantImpact&headertext1=My+Impact&fundraiserlabel1=Total+Players';

	request(goalUrl, function(error, response){
		if(!error){
			var test = response.body.toString().split('jsonpCallback(')[1].split('}});')[0]
			var raised = test.split('dd-thermo-raised')[1].split('<')[0].split(',').join('');
			raised = parseInt(raised.split('$')[1].split('\\')[0]);
			// console.log(raised);
			setKey('raised', raised);
			var goal = test.split('Goal: </span>')[1].split('</strong')[0];
			goal = parseInt(goal.split('$')[1].split('\\')[0].split(',').join(''));
			setKey('goal', goal);
			res.send(userGoalsJson)
		}else{
			console.log('Error parsing userGoal URL');
			res.send({status: 500, message: "There was an error trying to make your request"});
		}
	});
});

app.get('/userinfo/:id', function(req, res){
	var profileId = req.params.id;

	var profileUrl = 'http://www.extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=' + profileId;

	var userInfoJson = { name : "", image : "", donateURL: "", team: "", teamURL: "", profileURL: profileUrl};

	request(profileUrl, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);

			var name, image, donateURL, team, teamURL;


			$('#participant-name').filter(function(){

				name = $(this).children('h1').text();

				userInfoJson.name = name;

			});

			$('.avatar').filter(function(){

				image = $(this).children('img.profile-img').attr('src');

				userInfoJson.image = image;

			});

			$('.btn-support-card').filter(function(){

				donateURL = $(this).attr('href');

				userInfoJson.donateURL = donateURL;

			});

			$('.link-team').filter(function(){
				var data = $(this);

				team = data.text();
				teamURL = 'http://www.extra-life.org/' + data.attr('href');

				userInfoJson.team = team;
				userInfoJson.teamURL = teamURL;

			});

			res.send(userInfoJson);
		}else{
			console.log('Error parsing userInfo URL');
		}
		
	});
});

app.get('/recentDonations/:id', function(req, res){
	var userDonationsJson = {recentDonations:[]};

	var donationsId = req.params.id;

	var donationsUrl = 'http://www.extra-life.org/index.cfm?fuseaction=donorDrive.participantDonations&participantID=' + donationsId;

	request(donationsUrl, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);

			$('.donor-detail').each(function(i, elem){
				var data = $(this);
				var donorObj ={};
				donorObj.name = data.children('strong').text();
				donorObj.name = donorObj.name.replace(/(\r\n\t|\n|\r|\t)/gm,"");
				donorObj.date = data.children('small').text();
				donorObj.date = donorObj.date.replace(/(\r\n\t|\n|\r|\t)/gm,"");
				donorObj.message = data.children('em').text();
				donorObj.message = donorObj.message.replace(/(\r\n\t|\n|\r|\t)/gm,"");
				userDonationsJson.recentDonations.push(donorObj);

				// userDonationsJson.recentDonations = donorArray;

			});

			res.send(userDonationsJson);
		}else{
			console.log('Error parsing recentDonations URL');
			res.send({status: 500, message: "There was an error trying to make your request"});
		}
	});
});

app.get('/teamgoal/:id', function(req, res){
	var teamGoalsJson = { goal : "", raised : ""};

	var setKey = function(key, value){
		teamGoalsJson[key.toString()] = value;
		// console.log(key + ': ' + teamGoalsJson[key.toString()]);
		// console.log('set key value');
	}

	var teamId = req.params.id;

	var teamGoalUrl = 'http://www.extra-life.org/index.cfm?fuseaction=widgets.ajaxWidgetCompileHTML&callback=jsonpCallback&language=en&teamid0=' + teamId + '&eventid0=525&type0=thermometer&currencyformat0=none&orientation0=horizontal';

	request(teamGoalUrl, function(error, response){
		if(!error){
			var test = response.body.toString().split('jsonpCallback(')[1].split('}});')[0]
			var raised = test.split('dd-thermo-raised')[1].split('<')[0].split(',').join('');
			raised = parseInt(raised.split('$')[1].split('\\')[0]);
			// console.log(raised);
			setKey('raised', raised);
			var goal = test.split('Goal: </span>')[1].split('</strong')[0];
			goal = parseInt(goal.split('$')[1].split('\\')[0].split(',').join(''));
			setKey('goal', goal);
			res.send(teamGoalsJson)
		}else{
			console.log('Error parsing teamGoal URL');
			res.send({status: 500, message: "There was an error trying to make your request"});
		}
	});
});

app.get('/teaminfo/:id', function(req, res){

	var teamInfoId = req.params.id;

	var teamInfoUrl = 'http://www.extra-life.org/index.cfm?fuseaction=donordrive.teamParticipants&teamID=' + teamInfoId;

	var teamInfoJson = {name: "", teamURL: teamInfoUrl, teamImage: "", members:[]};

	request(teamInfoUrl, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);

			$('#team tbody tr').each(function(i, elem){
				var data = $(this).children('td').children('a');
				var memberObj ={name:"", raised: "", URL: "", pID: "", image: ""};
				memberObj.name = data.children('span').children('strong.block').text();
				memberObj.name = memberObj.name.replace(/(\r\n\t|\n|\r|\t)/gm,"");
				memberObj.raised = data.children('span').children('.gray').children('small:first-child').children('strong').text();
				var memberURL = data.attr('href');
				memberObj.URL = memberURL;
				memberObj.pID = memberURL.split('participantID=')[1];
				memberObj.image = 'http:' + data.children('span').children('.member-avatar').attr('src');
				teamInfoJson.members.push(memberObj);
			});

			$('#team-name').filter(function(){
				teamInfoJson.name = $(this).children('h1').text();
			})

			$('.profile-img').filter(function(){
				teamInfoJson.teamImage = 'http:' + $(this).attr('src');
			})

			res.send(teamInfoJson);
		}else{
			console.log('Error parsing teamInfo URL');
			res.send({status: 500, message: "There was an error trying to make your request"});
		}
	});
});

var port = process.env.PORT || 8081;

app.listen(port);
console.log('Extra-Life API running on port ' + port);
exports = module.exports = app;