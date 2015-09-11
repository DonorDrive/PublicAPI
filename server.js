var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

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
			console.log('Error parsing goal URL');
		}
	});
});

app.get('/userinfo/:id', function(req, res){
	var userInfoJson = { name : "", image : "", donateURL: "", team: "", teamURL: ""};

	var profileId = req.params.id;

	var profileUrl = 'http://www.extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=' + profileId;

	request(profileUrl, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);

			var name, image, donateURL, team, teamURL;


			$('#participant-name').filter(function(){
				var data = $(this);

				name = data.children('h1').text();

				userInfoJson.name = name;

			});

			$('.avatar').filter(function(){
				var data = $(this);

				image = data.children('img.profile-img').attr('src');

				userInfoJson.image = image;

			});

			$('.btn-support-card').filter(function(){
				var data = $(this);

				donateURL = data.attr('href');

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
			console.log('Error parsing profile URL');
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
				donorObj.name = data.children('strong').text().split(' made')[0];
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
			console.log('Error parsing goal URL');
		}
	});
});

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;