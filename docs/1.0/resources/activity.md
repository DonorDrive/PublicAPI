### Activity
Recent Activity associated with a Participant or Team.

#### Fields

Fields in bold are guaranteed in the response payload.

|Field|Type|Description|Notes|
|---|---|---|---|
|`amount`|`float`|The amount of this Donation Activity|For `donation` type Activity items|
|**`createdDateUTC`**|`date`|The ISO-8601-formatted date (in UTC) this Activity item was created||
|**`imageURL`**|`string`|The URL for the image associated with the Activity item||
|`message`|`string`|The message associated with the Activity item||
|`title`|`string`|The title associated with the Activity item||
|**`type`**|`string`|The type of Activity item|`donation` or `participantBadge` or `teamBadge`||

#### Endpoints

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/activity`|`Array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/teams/{teamID}/activity`|`Array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|