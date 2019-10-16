### Milestones
Fundraiser Milestones associated with a Participant.

**This feature may or may not be available for all instances of DonorDrive.**

#### Fields

Fields in bold are guaranteed in the response payload.

|Field|Type|Description|Notes|
|---|---|---|---|
|**`fundraisingGoal`**|`float`|The amount of this Fundraiser Milestone||
|**`description`**|`string`|A text description of this Fundraiser Milestone||
|`links`|`object`|An object containing related resources|`donate`: The donation URL for this Fundraiser Milestone|
|**`milestoneID`**|`string`|The unique ID of this Fundraiser Milestone||
|`endDateUTC`|`date`|If present, the date (in UTC) this Fundraiser Milestone becomes unavailable|ISO-8601 format|
|`startDateUTC`|`date`|If present, the date (in UTC) this Fundraiser Milestone became available|ISO-8601 format|

#### Endpoints

Default `orderBy`: `amount ASC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/milestones`|`Array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|