# Activity

Recent Activity associated with a Participant or Team.

## Endpoints

Default `orderBy`: `createdDateUTC DESC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/activity`|`Array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/teams/{teamID}/activity`|`Array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|

## Response

The response from the `activity` endpoint is an array of objects, with a maximum of 5, outlining the recent activity around the participant or team.

### Example

```json
[
  {
    "message": "Five Dollar Incentive",
    "amount": 5,
    "isIncentive": 1,
    "createdDateUTC": "2019-11-10T19:38:51.897+0000",
    "title": "Friendly Donor",
    "imageURL": "//static.donordrive.com/clients/try/img/avatar-constituent-default.gif",
    "type": "donation"
  },
  {
    "amount": 15,
    "createdDateUTC": "2019-11-08T15:22:13.933+0000",
    "title": "Friendly Donor",
    "imageURL": "//static.donordrive.com/clients/try/img/avatar-constituent-default.gif",
    "type": "donation"
  },
  {
    "amount": 10,
    "createdDateUTC": "2019-11-06T16:26:02.487+0000",
    "title": "Friendly Donor",
    "imageURL": "//static.donordrive.com/clients/try/img/avatar-constituent-default.gif",
    "type": "donation"
  },
  {
    "message": "Raised 100 dollars!",
    "createdDateUTC": "2019-11-06T16:25:01.530+0000",
    "title": "100 Club Badge",
    "imageURL": "http://assets.donordrive.com/try/images/$event508$/badge_2F7819D3_C019_3C7D_B9D716687CEEC0A5.png",
    "type": "participantBadge"
  },
  {
    "message": "Sent 25 donation invite emails!",
    "createdDateUTC": "2019-11-06T16:25:00.530+0000",
    "title": "Enthusiastic Participant Badge",
    "imageURL": "https://assets.donordrive.com/try/images/$event508$/badge_DCB0A883_BC0A_97DB_639B4D7BFDEC638E.png",
    "type": "participantBadge"
  }
]
```

### Fields

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|Filterable|
|---|---|---|---|---|
|`amount`|`float`|The amount of this Donation Activity|For `donation` type Activity items|`true`|
|**`createdDateUTC`**|`date`|The date (in UTC) this Activity item was created|ISO-8601 format|`true`|
|**`imageURL`**|`string`|The URL for the image associated with the Activity item||`true`|
|`isIncentive`|`boolean`|`true` if this donation claimed a Fundraiser Incentive|For `donation` type Activity items|`true`|
|`message`|`string`|The message associated with the Activity item||`true`|
|`title`|`string`|The title associated with the Activity item||`true`|
|**`type`**|`string`|The type of Activity item|`donation` or `participantBadge` or `teamBadge`|`true`|