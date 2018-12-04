### Participants/Personal Campaigns
Individual fundraisers participating in an active Participant Event or Personal Campaign.

#### Fields

Fields in bold are guaranteed in the response payload.

|Field|Type|Description|Notes|
|---|---|---|---|
|*`avatarImageURL`*|string|The URL for the avatar image associated with the Participant||
|`campaignDate`|string-formatted date|The date of the Personal Campaign|Personal Campaigns only|
|`campaignName`|string|The name of the Personal Campaign|Personal Campaigns only|
|*`createdDateUTC`*|string formatted date|The ISO-8601-formatted date (in UTC) this Participant was created||
|*`displayName`*|string|The Participant's name||
|*`eventID`*|integer|The ID of the Event this Participant is associated with||
|*`eventName`*|string|The name of the Event this Participant is associated with||
|*`fundraisingGoal`*|float|The Participant's individual goal||
|`isTeamCaptain`|boolean|If (true), this Participant is the captain of the team|Team Participants only|
|*`numDonations`*|integer|The number of donations this Participant has received||
|*`participantID`*|integer|The unique ID of the Participant||
|`streamURL`|string|The URL for the Live Fundraising(TM) stream associated with this Participant|Participant Object requests-only|
|`sumDonations`|float|The total sum of donations this Participant has received||
|`teamID`integer|The ID of the Team this Participant is associated with|Team Participants only|
|`teamName`|string|The name of the Team this Participant is associated with|Team Participants only|

#### Endpoints

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants`|`Array`||
|`/api/participants/{participantID}`|`Object`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/eventgroups/{groupCode}/participants`|`Array`|This feature may or may not be available for all instances of DonorDrive.|
|`/api/events/{eventID}/participants`|`Array`|To find `{eventID}`, visit your Event's Fundraising Page. Look for the `&eventID=` URL parameter.|
|`/api/teamgroups/{groupCode}/participants`|`Array`|This feature may or may not be available for all instances of DonorDrive.|
|`/api/teams/{teamID}/participants`|`Array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|