# extra-life-api
A simple API based on Express and Cheerio for showing donations, goals, and team from Extra-Life.org

Why?
------
I've ran a custom website for our Extra Life team last year, and we had a ton of success with it (we raised over $1700 dollars)!  However, one of the most difficult things was constantly updating donations and other info while we were doing it (which started to fall apart once we hit th 20 hour mark or so).  As a result, I decided to make a web scraper that does the job for you!!

Installation
------
Simply download this package and deploy on a web server running node.  To start the server simply type:
```javascript
node server
```
And you're good to go!  The app should default to port 8081.

API
------
There are 3 endpoints which can be accessed once the express server is up and running:
* **/usergoals/[userid]**
  * Provides a json object with the current donation amoutn and donation goal
* **/userinfo/[userid]**
  * Provides a json object with current user name, picture URL, donate URL, team name, and team URL
* **/recentDonations/[userid]**
  * Provides a json object with an array of your most recent donations (includes name, date, and message from donor)

