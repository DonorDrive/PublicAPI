# Donations

Donations associated with a Participant or Team.

## Endpoints

Default `orderBy`: `createdDateUTC DESC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/events/{eventID}/donations`|`Array`|To find `{eventID}`, visit your Event's Fundraising Page. Look for the `&eventID=` URL parameter.|
|`/api/participants/{participantID}/donations`|`Array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/teams/{teamID}/donations`|`Array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|

## Response

The response from the `donations` endpoint is an array of donation objects.

### Example

```json
[
  {
    "displayName": "Friendly Donor",
    "participantID": 4024,
    "amount": 20,
    "donorID": "EB8610A3FC435D58",
    "avatarImageURL": "//static.donordrive.com/clients/try/img/avatar-constituent-default.gif",
    "createdDateUTC": "2019-10-30T18:01:18.513+0000",
    "eventID": 581,
    "teamID": 5074,
    "donationID": "DF4E676D0828A8D5"
  },
  {
    "displayName": "Friendly Donor",
    "participantID": 4024,
    "amount": 10,
    "donorID": "DC3A81BE19445E15",
    "avatarImageURL": "//static.donordrive.com/clients/try/img/avatar-constituent-default.gif",
    "createdDateUTC": "2019-10-28T16:02:42.583+0000",
    "eventID": 581,
    "teamID": 5074,
    "donationID": "F491FB1141299348",
    "incentiveID": "213F6CC8-9CFE-C59F-C3FE158798AFA7B1"
  },
  {
    "displayName": "The Donation Foundation",
    "participantID": 4024,
    "amount": 100,
    "donorID": "03F279F2BF01283D",
    "avatarImageURL": "//static.donordrive.com/clients/try/img/avatar-constituent-default.gif",
    "createdDateUTC": "2019-10-26T15:26:13.290+0000",
    "eventID": 581,
    "teamID": 5074,
    "donationID": "3FF734E8C1657F6C"
  }
]
```

### Fields

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|Filterable|
|---|---|---|---|---|
|`amount`|`float`|The amount of this Donation|Dependent on privacy settings dictated by the Donor|`true`|
|**`avatarImageURL`**|`string`|The URL for the avatar image associated with the Donor||`true`|
|**`createdDateUTC`**|`date`|The date (in UTC) this Donation was created|ISO-8601 format|`true`|
|`displayName`|`string`|The Donor's name|Dependent on privacy settings dictated by the Donor|`true`|
|**`donationID`**|`string`|The unique ID of this Donation||`true`|
|`donorID`|`string`|The unique ID of the Donor|Dependent on privacy settings dictated by the Donor|`true`|
|**`eventID`**|`integer`|The ID of the Event this Donor is associated with||`true`|
|`incentiveID`|`string`|The ID of the Fundraiser Incentive associated to this Donation||`true`|
|`links`|`object`|An object containing related resources|`receipt`: The URL to download the receipt for this donation<br />`recipient`: The URL for the recipient's Fundraising Page|`false`|
|`message`|`string`|The message from the Donor|Dependent on privacy settings dictated by the Donor|`true`|
|`participantID`|`integer`|The ID of the Participant associated to this Donation|Participant Donations only|`true`|
|`teamID`|`integer`|The ID of the Team associated to this Donation|Team Participant Donations and Team Donations only|`true`|