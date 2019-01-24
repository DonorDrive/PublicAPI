### Participants/Personal Campaigns
Individual fundraisers participating in an active Participant Event or Personal Campaign.

#### Fields

Fields in bold are guaranteed in the response payload.

|Field|Type|Description|Notes|
|---|---|---|---|
|**`avatarImageURL`**|`string`|The URL for the avatar image associated with the Participant||
|`campaignDate`|`date`|The date of the Personal Campaign|Personal Campaigns only; ISO-8601 format|
|`campaignName`|`string`|The name of the Personal Campaign|Personal Campaigns only|
|**`createdDateUTC`**|`date`|The date (in UTC) this Participant was created|ISO-8601 format|
|**`displayName`**|`string`|The Participant's name||
|**`eventID`**|`integer`|The ID of the Event this Participant is associated with||
|**`eventName`**|`string`|The name of the Event this Participant is associated with||
|**`fundraisingGoal`**|`float`|The Participant's individual goal||
|`isTeamCaptain`|`boolean`|If (true), this Participant is the captain of the team|Team Participants only|
|`links`|`object`|An object containing related resources|`stream`: The URL for the Live Fundraising(TM) stream associated with this Participant|
|**`numDonations`**|`integer`|The number of donations this Participant has received||
|**`participantID`**|`integer`|The unique ID of the Participant||
|`sumDonations`|`float`|The total sum of donations this Participant has received||
|`teamID`|`integer`|The ID of the Team this Participant is associated with|Team Participants only|
|`teamName`|`string`|The name of the Team this Participant is associated with|Team Participants only|

#### Endpoints

Default `orderBy`: `createdDateUTC DESC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants`|`Array`||
|`/api/participants/{participantID}`|`Object`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/eventgroups/{groupCode}/participants`|`Array`|This feature may or may not be available for all instances of DonorDrive.|
|`/api/events/{eventID}/participants`|`Array`|To find `{eventID}`, visit your Event's Fundraising Page. Look for the `&eventID=` URL parameter.|
|`/api/teamgroups/{groupCode}/participants`|`Array`|This feature may or may not be available for all instances of DonorDrive.|
|`/api/teams/{teamID}/participants`|`Array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|
