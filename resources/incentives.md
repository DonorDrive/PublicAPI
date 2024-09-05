# Incentives

Fundraiser Incentives associated with a Participant.

**This feature may not be available for all instances of DonorDrive.**

## Endpoints

Default `orderBy`: `amount ASC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/incentives`|`array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/teams/{teamID}/incentives`|`array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|

## Response

The response from the `incentives` endpoint is an array of incentive objects.

### Example

```json
[
  {
    "amount": 10,
    "description": "I'll give you a personal shoutout on stream!",
    "incentiveImageURL": "https://assets.donordrive.com/extralife/images/$constituents$/98DEB758-C29F-F29A-66B83598945B70D1/deedee.jpg",
    "quantity": 5,
    "quantityClaimed": 0,
    "links": {
      "donate": "https://try.donordrive.com/index.cfm?fuseaction=donordrive.participant&participantID=15882&incentiveID=DBAC7F77-D0D0-A244-C3879E9BC1B5AC06#donate"
    },
    "incentiveID": "DBAC7F77-D0D0-A244-C3879E9BC1B5AC06",
    "isActive": true
  },
  {
    "endDateUTC": "2021-04-14T07:00:00.0+0000",
    "amount": 22,
    "description": "Spin the prize wheel!",
    "quantity": 5,
    "quantityClaimed": 0,
    "incentiveID": "74885F1C-0A20-4CA1-011F56911302E557",
    "isActive": false,
    "startDateUTC": "2021-04-01T07:00:00.0+0000"
  },
  {
    "amount": 50,
    "description": "Choose my Mario Kart character!",
    "incentiveImageURL": "https://assets.donordrive.com/extralife/images/$constituents$/98DEB758-C29F-F29A-66B83598945B70D1/deedee.jpg",
    "quantity": 1,
    "quantityClaimed": 0,
    "links": {
      "donate": "https://try.donordrive.com/index.cfm?fuseaction=donordrive.participant&participantID=15882&incentiveID=DBB0826A-F48D-319A-DE3F070C2CC46D7F#donate"
    },
    "incentiveID": "DBB0826A-F48D-319A-DE3F070C2CC46D7F",
    "isActive": true
  }
]
```

### Fields

|Field|Type|Description|Guaranteed|Filterable|Notes|
|---|---|---|---|---|---|
|`amount`|`float`|The amount of this Fundraiser Incentive|Yes|Yes||
|`description`|`string`|A text description of this Fundraiser Incentive|Yes|Yes||
|`incentiveID`|`string`|The unique ID of this Fundraiser Incentive|Yes|Yes||
|`endDateUTC`|`date`|If present, the date (in UTC) this Fundraiser Incentive becomes unavailable||Yes|ISO-8601 format|
|`incentiveImageURL`|`string`|The URL for the image associated with this Fundraiser Incentive|||
|`isActive`|`string`|`true` if this Fundraiser Incentive currently accepts donations|Yes|Yes|Added: 1.2|
|`links`|`object`|An object containing related resources|||`donate`: The donation URL for this Fundraiser Incentive|
|`startDateUTC`|`date`|If present, the date (in UTC) this Fundraiser Incentive became available||Yes|ISO-8601 format|
|`quantity`|`integer`|The total number available for this Fundraiser Incentive||Yes|If not present, the quantity is unlimited|
|`quantityClaimed`|`integer`|The number claimed of this Fundraiser Incentive||Yes|If not present, the quantity is unlimited and the quantity claimed is zero|