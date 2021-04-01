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

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|Filterable|
|---|---|---|---|---|
|**`avatarImageURL`**|`string`|The URL for the avatar image associated with this Participant||`true`|
|`campaignDate`|`date`|The date of the Personal Campaign|Personal Campaigns only; ISO-8601 format|`true`|
|`campaignName`|`string`|The name of the Personal Campaign|Personal Campaigns only|`true`|
|**`createdDateUTC`**|`date`|The date (in UTC) this Participant was created|ISO-8601 format|`true`|
|**`displayName`**|`string`|This Participant's name||`true`|
|**`eventID`**|`integer`|The ID of the Event this Participant is associated with||`true`|
|**`eventName`**|`string`|The name of the Event this Participant is associated with||`false`|
|**`fundraisingGoal`**|`float`|This Participant's individual goal||`true`|
|`isTeamCaptain`|`boolean`|`true` if this Participant is the captain of a team|Team Participants only|`true`|
|`links`|`object`|An object containing related resources|`donate`: The donation URL for this Participant<br />`page`: The URL for this Participant's Fundraising Page<br />`stream`: The URL for the Live Fundraising(TM) stream associated with this Participant|`false`|
|**`numDonations`**|`integer`|The number of donations this Participant has received||`true`|
|**`participantID`**|`integer`|The unique ID of this Participant||`true`|
|`streamIsLive`|`boolean`|`true` if this Participant is actively streaming on their Fundraising Page||`true`|
|`sumDonations`|`float`|The total sum of donations this Participant has received||`true`|
|`teamID`|`integer`|The ID of the Team this Participant is associated with|Team Participants only|`true`|
|`teamName`|`string`|The name of the Team this Participant is associated with|Team Participants only|`false`|