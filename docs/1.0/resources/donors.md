### Donors
Donors associated with a Participant or Team.

#### Fields

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|
|---|---|---|---|
|**`avatarImageURL`**|`string`|The URL for the avatar image associated with the Donor||
|**`displayName`**|`string`|The Donor's name||
|**`donorID`**|`string`|The unique ID of the Donor||
|**`modifiedDateUTC`**|`date`|The date (in UTC) this Donor last donated|ISO-8601 format|
|**`numDonations`**|`integer`|The number of Donations this Donor has made to the Participant or Team||
|**`sumDonations`**|`float`|The sum total of Donations this Donor has made to the Participant or Team||

#### Endpoints

Default `orderBy`: `modifiedDateUTC DESC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/donors`|`Array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/teams/{teamID}/donors`|`Array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|