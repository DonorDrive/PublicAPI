### Teams
Teams participating in an active Participant Event

#### Fields

Fields in bold are guaranteed in the response payload.

|Field|Type|Description|Notes|
|---|---|---|---|
|*`avatarImageURL`*|string|The URL for the avatar image associated with the Team||
|*`captainDisplayName`*|string|The captain Participant's name||
|*`createdDateUTC`*|string-formatted date|The ISO-8601-formatted date (in UTC) this Team was created||
|*`eventID`*|integer|The ID of the Event this Team is associated with||
|*`eventName`*|string|The name of the Event this Team is associated with||
|*`fundraisingGoal`*|float|The Team's goal||
|*`isInviteOnly`*|boolean|Does this Team restrict registration to invitations-only||
|*`name`*|string|The Team's name||
|*`numDonations`*|integer|The number of donations this Team has received||
|*`sumDonations`*|float|The total sum of donations this Team has received||
|*`teamID`*|integer|The unique ID of the Team||

#### Endpoints

|Path|Return Type|Notes|
|---|---|---|
|`/api/teams`|`Array`||
|`/api/teams/{teamID}`|`Object`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|
|`/api/eventgroups/{groupCode}/teams`|`Array`|This feature may or may not be available for all instances of DonorDrive.|
|`/api/events/{eventID}/teams`|`Array`|To find `{eventID}`, visit your Event's Fundraising Page. Look for the `&eventID=` URL parameter.|
|`/api/teamgroups/{groupCode}/teams`|`Array`|This feature may or may not be available for all instances of DonorDrive|