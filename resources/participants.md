# Participants/Personal Campaigns

Individual fundraisers participating in an active Participant Event or Personal Campaign.

## Endpoints

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}`|`object`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|

## Response

The response from the `participants` endpoint is a single fundraiser object.

### Example

```json
[
   {
    "displayName": "Liam Bonham",
    "fundraisingGoal": 8000,
    "eventName": "Test Participant Event",
    "links": {
      "donate": "https://testdrive.donordrive.com/index.cfm?fuseaction=donordrive.participant&participantID=19265#donate",
      "page": "https://testdrive.donordrive.com/index.cfm?fuseaction=donordrive.participant&participantID=19265"
    },
    "createdDateUTC": "2019-11-02T15:02:38.93+0000",
    "eventID": 508,
    "sumDonations": 4661,
    "participantID": 19265,
    "teamName": "The Bonhams",
    "avatarImageURL": "https://static.donordrive.com/clients/try/img/avatar-constituent-default.gif",
    "teamID": 8775,
    "isTeamCaptain": true,
    "sumPledges": 0,
    "numDonations": 51
  }
]
```

### Fields

|Field|Type|Description|Guaranteed|Filterable|Notes|
|---|---|---|---|---|---|
|`activityGoal`|`float`|The Participant's activity goal|No|No||
|`avatarImageURL`|`string`|The URL for the avatar image associated with this Participant|Yes|Yes||
|`campaignDate`|`date`|The date of the Personal Campaign|||Personal Campaigns only; ISO-8601 format|
|`campaignName`|`string`|The name of the Personal Campaign|||Personal Campaigns only|
|`canBeCaptain`|`boolean`|`true` if the Participant's type permits them to be a team captain|No|No||
|`createdDateUTC`|`date`|The date (in UTC) this Participant was created|Yes|Yes|ISO-8601 format|
|`displayName`|`string`|This Participant's name|Yes|Yes||
|`eventID`|`integer`|The ID of the Event this Participant is associated with|Yes|Yes||
|`eventName`|`string`|The name of the Event this Participant is associated with|Yes|||
|`fundraisingGoal`|`float`|This Participant's individual goal|Yes|Yes||
|`hasActivityTracking`|`boolean`|`true` if Participant's type has activity tracking enabled|No|No||
|`isCheckedIn`|`boolean`|`true` if the Participant has completed event check-in|No|Yes||
|`isCustomAvatarImage`|`boolean`|`true` if that Participant has uploaded an avatar image|No|No||
|`isTeamCaptain`|`boolean`|`true` if this Participant is the captain of a Team||`true`|Team Participants only|
|`links`|`object`|An object containing related resources|||`donate`: The donation URL for this Participant<br />`page`: The URL for this Participant's Fundraising Page<br />`stream`: The URL for the Live Fundraising(TM) stream associated with this Participant|
|`mustBeTeamCaptain`|`boolean`|`true` if the Participant's type requires them to be a team captain|No|No||
|`numAwardedBadges`|`integer`|The number of badges this Participant has received||Yes|Added: 1.2|
|`numIncentives`|`integer`|The number of fundraising incentives this Participant has created||Yes|Added: 1.3|
|`numMilestones`|`integer`|The number of fundraising milestones this Participant has created||Yes|Added: 1.3|
|`numDonations`|`integer`|The number of donations this Participant has received|Yes|Yes||
|`participantID`|`integer`|The unique ID of this Participant|Yes|Yes||
|`participantTypeCode`|`string`|The code associated with the Participant's type|Yes|Yes||
|`streamingChannel`|`string`|The Participant's streaming channel name|No|No||
|`streamingPlatform`|`string`|The streaming platform name|No|No||
|`streamIsEnabled`|`boolean`|`true` if the Participant has configured streaming|No|Yes||
|`streamIsLive`|`boolean`|`true` if this Participant is actively streaming on their Fundraising Page||Yes||
|`sumActivityUnits`|`float`|The total activity logged by this Participant|No|Yes||
|`sumDonations`|`float`|The total sum of donations this Participant has received|Yes|Yes||
|`sumPledges`|`float`|The total sum of pledges this Team has received||Yes||
|`teamID`|`integer`|The ID of the Team this Participant is associated with||Yes|Team Participants only|
|`teamName`|`string`|The name of the Team this Participant is associated with|||Team Participants only|