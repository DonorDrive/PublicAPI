# Incentives

Fundraiser Incentives associated with a Participant.

**This feature may not be available for all instances of DonorDrive.**

## Endpoints

Default `orderBy`: `amount ASC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/incentives`|`Array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|

## Response

The response from the `incentives` endpoint is an array of incentive objects.

### Example

```json
[
  {
    "amount": 10,
    "description": "I'll give you a personal shoutout on stream!",
    "incentiveImageURL": "//assets.donordrive.com/extralife/images/$constituents$/98DEB758-C29F-F29A-66B83598945B70D1/deedee.jpg",
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
    "incentiveImageURL": "//assets.donordrive.com/extralife/images/$constituents$/98DEB758-C29F-F29A-66B83598945B70D1/deedee.jpg",
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

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|Filterable|
|---|---|---|---|---|
|**`amount`**|`float`|The amount of this Fundraiser Incentive||`true`|
|**`description`**|`string`|A text description of this Fundraiser Incentive||`true`|
|**`incentiveID`**|`string`|The unique ID of this Fundraiser Incentive||`true`|
|`endDateUTC`|`date`|If present, the date (in UTC) this Fundraiser Incentive becomes unavailable|ISO-8601 format|`true`|
|`incentiveImageURL`|`string`|The URL for the image associated with this Fundraiser Incentive||`false`|
|**`isActive`**|`string`|Added: 1.2<br/>`true` if this Fundraiser Incentive currently accepts donations||`true`|
|`links`|`object`|An object containing related resources|`donate`: The donation URL for this Fundraiser Incentive|`false`|
|`startDateUTC`|`date`|If present, the date (in UTC) this Fundraiser Incentive became available|ISO-8601 format|`true`|
|`quantity`|`integer`|The total number available for this Fundraiser Incentive|If not present, the quantity is unlimited|`true`|
|`quantityClaimed`|`integer`|The number claimed of this Fundraiser Incentive|If not present, the quantity is unlimited and the quantity claimed is zero|`true`|