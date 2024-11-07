# Teams

#### Endpoints

|Path|Return Type|Notes|
|---|---|---|
|`/api/teams/{teamID}`|`object`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|

## Response

The response from the `teams` endpoint is a single team object.

### Example

```json
[
  {
    "numParticipants": 5,
    "fundraisingGoal": 20000,
    "eventName": "Test Participant Event",
    "links": {
      "donate": "https://testdrive.donordrive.com/index.cfm?fuseaction=donate.team&teamID=8775",
      "page": "https://testdrive.donordrive.com/index.cfm?fuseaction=donorDrive.team&teamID=8775"
    },
    "createdDateUTC": "2019-11-02T15:02:38.93+0000",
    "eventID": 508,
    "sumDonations": 9349.5,
    "name": "The Bonhams",
    "isInviteOnly": false,
    "captainDisplayName": "Liam Bonham",
    "avatarImageURL": "https://static.donordrive.com/clients/try/img/avatar-team-default.gif",
    "teamID": 8775,
    "sumPledges": 0,
    "numDonations": 97
  }
]
```

### Fields

|Field|Type|Description|Guaranteed|Filterable|Notes|
|---|---|---|---|---|---|
|`activitygoal`|`float`|The Team's activity goal|No|No||
|`avatarImageURL`|`string`|The URL for the avatar image associated with this Team|Yes|||
|`captainDisplayName`|`string`|The captain Participant's name|Yes|Yes||
|`createdDateUTC`|`date`|The date (in UTC) this Team was created|Yes|Yes|ISO-8601 format|
|`eventID`|`integer`|The ID of the Event this Team is associated with|Yes|Yes||
|`eventName`|`string`|The name of the Event this Team is associated with|Yes|||
|`fundraisingGoal`|`float`|This Team's goal|Yes|Yes||
|`hasActivityTracking`|`boolean`|`true` if Team's type has activity tracking enabled|No|No||
|`hasExclusiveCode`|`boolean`|`true` if the Team's type is configured to allow exclusive teams|No|No||
|`hasTeamOnlyDonations`|`boolean`|`true` if the Team's type has Disabled Personal Fundraising|No|No||
|`isCustomAvatarImage`|`boolean`|`true` if that Team has uploaded an avatar image|No|No||
|`isInviteOnly`|`boolean`|Does this Team restrict registration to invitations-only||Yes||
|`links`|`object`|An object containing related resources|||`donate`: The donation URL for this Team<br />`page`: The URL for this Team's Fundraising Page<br />`stream`: The URL for the Live Fundraising(TM) stream associated with this Team|
|`name`|`string`|This Team's name|Yes|Yes||
|`numAwardedBadges`|`integer`|The number of badges this Team has received||Yes|Added: 1.2|
|`numDonations`|`integer`|The number of donations this Team has received|Yes|Yes||
|`numIncentives`|`integer`|The total number of team incentives configured|No|No||
|`numMilestones`|`integer`|The total number of team milestones configured|No|No||
|`numParticipants`|`integer`|The number of Participants associated with this Team|Yes|Yes||
|`sourceTeamID`|`integer`|The Team's original teamID in the first event it appeared in|Yes|Yes||
|`streamingChannel`|`string`|The Teams's streaming channel name|No|No||
|`streamingPlatform`|`string`|The streaming platform name|No|No||
|`streamIsEnabled`|`boolean`|`true` if the Team has configured streaming|No|Yes||
|`streamIsLive`|`boolean`|`true` if this Team is actively streaming on their Fundraising Page||Yes||
|`sumActivityUnits`|`float`|The total activity logged by this Team|No|Yes||
|`sumDonations`|`float`|The total sum of donations this Team has received|Yes|Yes||
|`sumPledges`|`float`|The total sum of pledges this Team has received||Yes||
|`teamID`|`integer`|The unique ID of this Team|Yes|Yes||