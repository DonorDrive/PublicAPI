# Participants/Personal Campaigns

Individual fundraisers participating in an active Participant Event or Personal Campaign.

## Endpoints

Default `orderBy`: `createdDateUTC DESC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants`|`Array`||
|`/api/participants/{participantID}`|`Object`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/eventgroups/{groupCode}/participants`|`Array`|This feature may not be available for all instances of DonorDrive.|
|`/api/events/{eventID}/participants`|`Array`|To find `{eventID}`, visit your Event's Fundraising Page. Look for the `&eventID=` URL parameter.|
|`/api/teamgroups/{groupCode}/participants`|`Array`|This feature may not be available for all instances of DonorDrive.|
|`/api/teams/{teamID}/participants`|`Array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|

## Response

The response from the `participants` endpoint is an array of, or a single fundraiser object.

### Example

```json
[
   {
    "displayName": "Liam Bonham",
    "fundraisingGoal": 8000,
    "eventName": "Test Participant Event",
    "links": {
      "donate": "https://try.donordrive.com/index.cfm?fuseaction=donordrive.participant&participantID=19265#donate",
      "page": "https://try.donordrive.com/index.cfm?fuseaction=donordrive.participant&participantID=19265"
    },
    "createdDateUTC": "2019-11-02T15:02:38.93+0000",
    "eventID": 508,
    "sumDonations": 4661,
    "participantID": 19265,
    "teamName": "The Bonhams",
    "avatarImageURL": "//static.donordrive.com/clients/try/img/avatar-constituent-default.gif",
    "teamID": 8775,
    "isTeamCaptain": true,
    "sumPledges": 0,
    "numDonations": 51
  },
  {
    "displayName": "Jonathon Tory",
    "fundraisingGoal": 10000,
    "eventName": "Test Participant Event",
    "links": {
      "donate": "https://try.donordrive.com/index.cfm?fuseaction=donordrive.participant&participantID=15882#donate",
      "page": "https://try.donordrive.com/index.cfm?fuseaction=donordrive.participant&participantID=15882"
    },
    "createdDateUTC": "2019-09-12T13:51:25.137+0000",
    "eventID": 508,
    "sumDonations": 2085,
    "participantID": 15882,
    "avatarImageURL": "//static.donordrive.com/clients/try/img/avatar-constituent-default.gif",
    "sumPledges": 0,
    "numDonations": 28
  }
]
```

### Fields

|Field|Type|Description|Guaranteed|Filterable|Notes|
|---|---|---|---|---|---|
|`avatarImageURL`|`string`|The URL for the avatar image associated with this Participant|Yes|Yes||
|`campaignDate`|`date`|The date of the Personal Campaign|||Personal Campaigns only; ISO-8601 format|
|`campaignName`|`string`|The name of the Personal Campaign|||Personal Campaigns only|
|`createdDateUTC`|`date`|The date (in UTC) this Participant was created|Yes|Yes|ISO-8601 format|
|`displayName`|`string`|This Participant's name|Yes|Yes||
|`eventID`|`integer`|The ID of the Event this Participant is associated with|Yes|Yes||
|`eventName`|`string`|The name of the Event this Participant is associated with|Yes|||
|`fundraisingGoal`|`float`|This Participant's individual goal|Yes|Yes||
|`isTeamCaptain`|`boolean`|`true` if this Participant is the captain of a team||`true`|Team Participants only|
|`links`|`object`|An object containing related resources|||`donate`: The donation URL for this Participant<br />`page`: The URL for this Participant's Fundraising Page<br />`stream`: The URL for the Live Fundraising(TM) stream associated with this Participant|
|`numAwardedBadges`|`integer`|The number of badges this Participant has received||Yes|Added: 1.2|
|`numDonations`|`integer`|The number of donations this Participant has received|Yes|Yes||
|`participantID`|`integer`|The unique ID of this Participant|Yes|Yes||
|`streamIsLive`|`boolean`|`true` if this Participant is actively streaming on their Fundraising Page||Yes||
|`sumDonations`|`float`|The total sum of donations this Participant has received|Yes|Yes||
|`sumPledges`|`float`|The total sum of pledges this Team has received||Yes||
|`teamID`|`integer`|The ID of the Team this Participant is associated with||Yes|Team Participants only|
|`teamName`|`string`|The name of the Team this Participant is associated with|||Team Participants only|