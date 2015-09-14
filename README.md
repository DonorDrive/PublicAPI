# extra-life-api
A simple API layer based on Express and Cheerio for showing donations, goals, and team info from Extra-Life.org

Why?
------
[I ran a custom website for our Extra Life team last year](http://alexmuench.net/extralife), and we had a ton of success with it (we raised over $1700 dollars)!  However, one of the most difficult things was constantly updating donations and other info while we were doing it (which started to fall apart once we hit th 20 hour mark or so).  As a result, I decided to make a web scraper that does the job for you!!

Installation
------
You can manually install this by cloning this github repo
```bash
https://github.com/ammuench/extra-life-api.git
```
then running 
```bash
npm install
```
from within the project folder.

You can install through NPM by running
```bash
npm install extra-life-api
```

Once downloaded, move to the base module folder and simply run:

```bash
node server
```
And you're good to go!  The app should default to port 8081.  If you wish to run on a different port, you can specify it while starting the service

```bash
PORT=1234 node server
```

If you want to run this as a constant process on your webserver, I suggest looking into [ForeverJs](https://github.com/foreverjs/forever)

Configuration
------
By default the service will accept all incoming requests.  If you wish to restrict this, you can go to line 7 of server.js and edit the following:

```javascript
app.all('*', function(req, res, next){
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authentication, AdminAccess');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});
```
to change your server restrictions and whatnot

API
------
There are 3 endpoints which can be accessed once the express server is up and running.  Each endpoint must be passed the individual's 'Participant ID' or a team's 'Team ID'.  These can be found by going to your personal profile page or team profile page, and checking the end of the URL:

**Participant ID**

extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=**[PARTICIPANT ID HERE]**

**Team ID**

extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=**[TEAM ID HERE]**


* **/usergoals/[userid]**
  * Provides a json object with the current donation amoutn and donation goal
  * Returns the response:
  
    ```javascript
    {
      "goal":0,
      "raised":0
    }
    ```
    
* **/userinfo/[userid]**
  * Provides a json object with current user name, picture URL, donate URL, team name, and team URL
  * Returns the response:
  
    ```javascript
    {
      "name":"",
      "image":"",
      "donateURL":"",
      "team":"",
      "teamURL":"",
      "profleURL": ""
    }
    ```
    
* **/recentDonations/[userid]**
  * Provides a json object with an array of your most recent donations (includes name, date, and message from donor)
  * Returns the response:
  
    ```javascript
    {
      "recentDonations":[
        {
          "name":"",
          "date":"",
          "message":""
        },{
          "name":"",
          "date":"",
          "message":""
        },{
          "name":"",
          "date":"",
          "message":""
        }
      ]
    }
    ```
* **/teamgoal/[teamid]**
  * Provides a json object with information about a team's donation goals and current status
  * Returns the response:
  
    ```javascript
    {
      "goal": 2000,
      "raised": 0
    }
    ```

* **/teaminfo/[teamid]**
  * Provides a json object with a basic team information and an array of all current team members.  Each team member object has their name, amount raised, profile URL, profile ID, and image URL
  * Returns the response:
  
    ```javascript
    {
      "name": "",
      "teamURL": "",
      "teamImage": "",
      "members": [
        {
          "name": "",
          "raised": "",
          "URL": "",
          "pID": "",
          "image": ""
        },{
          "name": "",
          "raised": "",
          "URL": "",
          "pID": "",
          "image": ""
        },{
          "name": "",
          "raised": "",
          "URL": "",
          "pID": "",
          "image": ""
        }
      ]
    }
    ```
    
License
------
This content is released under the [MIT License](https://opensource.org/licenses/MIT)

Shamless Plug
------
If you like this work, you can [donate to my Extra Life page here](http://www.extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=144846).

Also, if you'd like to see our custom Extra-Life Campaign page (which uses this middleware as our API service!), [please check us out here](http://alexmuench.net/extralife)
