# Donations

Donations associated with an Event, Participant, or Team.

## Endpoints

Default `orderBy`: `createdDateUTC DESC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/events/{eventID}/donations`|`array`|To find `{eventID}`, visit your Event's Fundraising Page. Look for the `&eventID=` URL parameter.|
|`/api/participants/{participantID}/donations`|`array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/teams/{teamID}/donations`|`array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|

## Response

The response from the `donations` endpoint is an array of donation objects.

### Example

```json
[
  {
    "displayName": "Friendly Donor",
    "participantID": 4024,
    "amount": 10,
    "donorID": "EB8610A3FC435D58",
    "avatarImageURL": "https://static.donordrive.com/clients/try/img/avatar-constituent-default.gif",
    "createdDateUTC": "2019-10-30T18:01:18.513+0000",
    "eventID": 581,
    "teamID": 5074,
    "donationID": "DF4E676D0828A8D5",
	"links": {
            "recipient": "https://try.donordrive.com/index.cfm?fuseaction=donorDrive.participant&participantID=4024",
            "donate": "https://try.donordrive.com/index.cfm?fuseaction=donorDrive.donate&participantID=4024"
        },
	"isRegFee": false,
	"recipientName": "Jane Participant",
	"recipientImageURL": "https://try.donordrivecontent.com/try/images/$avatars$/constituent_8672DB7B-CE87-F677-6260FF8F15074828.jpg",
	"message": null,
	"activityPledgeUnitAmount": 10.00,
	"activityPledgeMaxAmount": 1000.00
  },
  {
    "displayName": "Jane Participant",
    "participantID": 4024,
    "amount": 10,
    "donorID": "DC3A81BE19445E15",
	"isRegFee": false,
    "avatarImageURL": "https://static.donordrive.com/clients/try/img/avatar-constituent-default.gif",
    "createdDateUTC": "2019-10-28T16:02:42.583+0000",
    "eventID": 581,
    "teamID": 5074,
    "donationID": "F491FB1141299348",
	"links": {
            "recipient": "https://try.donordrive.com/index.cfm?fuseaction=donorDrive.participant&participantID=4024",
            "donate": "https://try.donordrive.com/index.cfm?fuseaction=donorDrive.donate&participantID=4024"
        },
    "incentiveID": "213F6CC8-9CFE-C59F-C3FE158798AFA7B1",
	"recipientName": "Jane Participant",
	"recipientImageURL": "https://try.donordrivecontent.com/try/images/$avatars$/constituent_8672DB7B-CE87-F677-6260FF8F15074828.jpg",
	"message": null,
	"donorIsRecipient": true
  },
  {
    "displayName": "The Donation Foundation",
    "participantID": 4024,
    "amount": 100,
	"isRegFee": false,
    "donorID": "03F279F2BF01283D",
    "avatarImageURL": "https://static.donordrive.com/clients/try/img/avatar-constituent-default.gif",
    "createdDateUTC": "2019-10-26T15:26:13.290+0000",
    "eventID": 581,
    "teamID": 5074,
    "donationID": "3FF734E8C1657F6C",
	"links": {
            "recipient": "https://try.donordrive.com/index.cfm?fuseaction=donorDrive.participant&participantID=4024",
            "donate": "https://try.donordrive.com/index.cfm?fuseaction=donorDrive.donate&participantID=4024"
        },
	"recipientName": "Jane Participant",
	"recipientImageURL": "https://try.donordrivecontent.com/try/images/$avatars$/constituent_8672DB7B-CE87-F677-6260FF8F15074828.jpg",
	"message": null
  }
]
```

### Fields

|Field|Type|Description|Guaranteed|Filterable|Notes|
|---|---|---|---|---|---|
|`activityPledgeMaxAmount`|`float`|The maximum amount pledged for an activity pledge|No|No||
|`activityPledgeUnitAmount`|`integer`|The amount pledged per activity unit|No|No||
|`amount`|`float`|The amount of this Donation||Yes|Dependent on privacy settings dictated by the Donor|
|`avatarImageURL`|`string`|The URL for the avatar image associated with the Donor|Yes|Yes||
|`createdDateUTC`|`date`|The date (in UTC) this Donation was created|Yes|Yes|ISO-8601 format|
|`displayName`|`string`|The Donor's name||Yes|Dependent on privacy settings dictated by the Donor|
|`donationID`|`string`|The unique ID of this Donation|Yes|Yes||
|`donorID`|`string`|The unique ID of the Donor||Yes|Dependent on privacy settings dictated by the Donor|
|`donorIsRecipient`|`boolean`|`true` if the donor is the same constituent as the recipient|No|No|Dependent on privacy settings dictated by the Donor|
|`eventID`|`integer`|The ID of the Event this Donor is associated with|Yes|Yes||
|`incentiveID`|`string`|The ID of the Fundraiser Incentive associated to this Donation||Yes||
|`isRegFee`|`boolean`|`true` if the donation is a registration fee|No|No||
|`links`|`object`|An object containing related resources|No|No|`recipient`: The URL for this recipient's (evet, participant, team) Fundraising Page<br />`donate`: The donation URL for this Participant|
|`message`|`string`|The message from the Donor|Yes|No|Dependent on privacy settings dictated by the Donor|
|`participantID`|`integer`|The ID of the Participant associated to this Donation||Yes|Participant Donations only|
|`recipientName`|`string`|The name of the event, participant, or team the received the donation|Yes|No||
|`recipientImageURL`|`string`|The URL for the avatar image associated with this Event, Participant, or Team|Yes|No||
|`teamID`|`integer`|The ID of the Team associated to this Donation||Yes|Team Participant Donations and Team Donations only|