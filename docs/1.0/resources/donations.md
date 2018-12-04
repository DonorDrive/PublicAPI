### Donations
Donations associated with a Participant or Team.

#### Fields

Fields in bold are guaranteed in the response payload.

|Field|Type|Description|Notes|
|---|---|---|---|
|`amount`|`float`|The amount of this Donation|Dependent on privacy settings dictated by the Donor|
|**`avatarImageURL`**|`string`|The URL for the avatar image associated with the Donor||
|**`createdDateUTC`**|`date`|The ISO-8601-formatted date (in UTC) this Donation was created||
|`displayName`|`string`|The Donor's name|Dependent on privacy settings dictated by the Donor|
|**`donationID`**|`string`|The unique ID of the Donation||
|`donorID`|`string`|The unique ID of the Donor|Dependent on privacy settings dictated by the Donor|
|`message`|`string`|The message from the Donor|Dependent on privacy settings dictated by the Donor|
|`participantID`|`integer`|The ID of the Participant associated to this Donation|Participant Donations only|
|`teamID`|`integer`|The ID of the Team associated to this Donation|Team Participant Donations and Team Donations only|

#### Endpoints

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/donations`|`Array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/teams/{teamID}/donations`|`Array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|