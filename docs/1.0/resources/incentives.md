### Incentives
Fundraiser Incentives associated with a Participant.

**This feature may not be available for all instances of DonorDrive.**

#### Fields

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|
|---|---|---|---|
|**`amount`**|`float`|The amount of this Fundraiser Incentive||
|**`description`**|`string`|A text description of this Fundraiser Incentive||
|**`incentiveID`**|`string`|The unique ID of this Fundraiser Incentive||
|`endDateUTC`|`date`|If present, the date (in UTC) this Fundraiser Incentive becomes unavailable|ISO-8601 format|
|`incentiveImageURL`|`string`|The URL for the image associated with this Fundraiser Incentive||
|`links`|`object`|An object containing related resources|`donate`: The donation URL for this Fundraiser Incentive|
|`startDateUTC`|`date`|If present, the date (in UTC) this Fundraiser Incentive became available|ISO-8601 format|
|`quantity`|`integer`|The total number available for this Fundraiser Incentive|If not present, the quantity is unlimited|
|`quantityClaimed`|`integer`|The number claimed of this Fundraiser Incentive||

#### Endpoints

Default `orderBy`: `amount ASC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/incentives`|`Array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|