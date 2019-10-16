### Badges
Achievement Badges associated with a Participant or Team.

**This feature may or may not be available for all instances of DonorDrive.**

#### Fields

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|
|---|---|---|---|
|**`badgeCode`**|`string`|The code associated with this Badge||
|**`badgeImageURL`**|`string`|The URL for the image associated with this Badge||
|**`description`**|`string`|The description of this Badge|Honors `Accept-Language` header|
|**`title`**|`string`|The title of this Badge|Honors `Accept-Language` header|
|**`unlockedDateUTC`**|`date`|The date this Badge was unlocked by the Participant or Team|ISO-8601 format|

#### Endpoints

Default `orderBy`: `unlockedDateUTC DESC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/badges`|`Array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/teams/{teamID}/badges`|`Array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|