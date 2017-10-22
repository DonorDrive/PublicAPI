# extra-life-api
A node-based API module that wraps the Extra-Life API, and extends it to provide additional info!

Why?
------
[I've been doing Extra Life for 3 years now](http://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=219449), and every year I've built a custom little website to send to family, friends, and coworkers to help collect donations.

Up 'til last year, Extra Life had no public API to grab data about your team's donations, goals, info, etc.  So the old version of this used to scrape various Extra Life profile page to return data so people could build cool little site or stream overlays to adverise their campaign more effectively!

However, Extra Life has now released a public api that can be exposed for most any page by adding `&format=json` to the end of the profile's URL.  This is great, but I still found it lacking in a couple areas, so I decided to build something that expands on it a bit, while also making it an easy to use node module for easy consumption.

Installation
------
You can manually install this by cloning this github repo
```bash
https://github.com/ammuench/extra-life-api.git
```
or running

```bash
npm i extra-life-api
```

Once installed, you can require the package like any other standard node-module
```javascript
var elAPI = require('extra-life-api');
```

and then use it in your app as needed:
```javascript
elApi.getUserInfo(userId, function(data){
    console.log(data);
});
```

API Options
------
There are 4 methods which can be accessed from the module.  Each method must be passed the individual's 'Participant ID' or a team's 'Team ID'.  These can be found by going to your personal profile page or team profile page, and checking the end of the URL:

**Participant ID**

extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=**[PARTICIPANT ID HERE]**

**Team ID**

extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=**[TEAM ID HERE]**


* **extralifeapi.getUserInfo( participantId, callback( data ) )**
  * Takes participantId as a parameter
  * Has a callback that contains basic user info & their current goal info passed as the following JSON object:  
  
    ```javascript
    {
      displayName: 'Alex Muench',                                                                                                          
      totalRaisedAmount: 0,                                                                                                                
      fundraisingGoal: 500,                                                                                                                
      participantID: 219449,                                                                                                               
      createdOn: '2016-09-12T15:46:50-0400',                                                                                               
      avatarImageURL: 'http://assets.donordrive.com/extralife/images/$avatars$/constituent_0C07ECD7-C293-34EB-45A3F7B77F8BA043.jpg',       
      teamID: 29978,                                                                                                                       
      isTeamCaptain: true,                                                                                                                 
      donateURL: 'https://www.extra-life.org/index.cfm?fuseaction=donate.participant&participantID=219449',                                
      teamName: 'Dreem Teem',                                                                                                              
      teamURL: 'http://www.extra-life.org/index.cfm?fuseaction=donordrive.team&teamID=29978' 
    }
    ```
    
* **extralifeapi.getRecentDonations( participantId, callback( data ) )**
  * Takes participantId as a parameter
  * Returns a callback that contains a JSON object which contains an array of donation objects in the following format:
  
    ```javascript
    [{
      message: "Great job raising money!",
      createdOn: "2016-09-18T10:50:21-0400",
      donorName: "Alex Muench",
      avatarImageURL: "//static.donordrive.com/clients/extralife/img/avatar-constituent-default.gif",
      donationAmount: 100
    }]
    ```
    
* **extralifeapi.getTeamInfo( teamId, callback( data ) )**
  * Takes teamId as a parameter
  * Returns a callback that contains a JSON object with the following info about a team, it's goals, and it's roster
    * *Roster only shows team members listed on first page at the moment*
  
    ```javascript
    { 
      totalRaisedAmount: 0,                                                                                                                
      fundraisingGoal: 3000,                                                                                                               
      createdOn: '2016-09-12T15:46:50-0400',                                                                                               
      avatarImageURL: 'http://static.donordrive.com/clients/extralife/img/avatar-team-default.gif',                                        
      teamID: 29978,                                                                                                                       
      name: 'Dreem Teem',                                                                                                                  
      teamURL: 'http://www.extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=29978',                                              
      members:                                                                                                                             
      [   
        { 
          name: 'Alex Muench',                                                                                                            
          isTeamCaptain: true,                                                                                                            
          raised: 0,                                                                                                                      
          URL: 'http://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=219449',                              
          pID: 219449,                                                                                                                    
          image: 'http://assets.donordrive.com/extralife/images/$avatars$/constituent_0C07ECD7-C293-34EB-45A3F7B77F8BA043.jpg' 
        },         
        { 
          name: 'Alex Muench 2',                                                                                                            
          isTeamCaptain: false,                                                                                                            
          raised: 0,                                                                                                                      
          URL: 'http://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=219449',                              
          pID: 219449,                                                                                                                    
          image: 'http://assets.donordrive.com/extralife/images/$avatars$/constituent_0C07ECD7-C293-34EB-45A3F7B77F8BA043.jpg'
        } 
      ] 
    }
    ```
    
License
------
[The MIT License (MIT)](https://tldrlegal.com/license/mit-license)

Copyright (c) 2015 Alex Muench

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Shamless Plug
------
If you like this work, you can [donate to my Extra Life page here](https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=275385).

Also, if you'd like to see our custom Extra-Life Campaign page (which uses this middleware as our API service!), [please check us out here](http://alexmuen.ch/extralife)
