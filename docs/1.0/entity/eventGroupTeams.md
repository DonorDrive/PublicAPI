### Get an Event Groups Teams
`/api/eventgroups/{groupCode}/teams`
#### Supported Query Parameters
|Query Parameter|Description|
|---|---|
|`callback`|The value provided will wrap the payload as a JSONP-formatted response.|
|`version`|The version of the API desired. If no version parameter is provided, the API will default to the oldest supported version.|
#### Path Parameters
|Field|Description|
|---|---|
|`groupCode`| The group code of the event group |
#### Response format
On a successful HTTP Call, `200` OK will be returned with an object whose body will contain an event groups teams.
#### Event Group Teams Object
|Field|Type|Description|
|---|---|---|
|`avatarImageURL` |string|The URL for the avatar image associated with the Team|
|`createdDateUTC` |string-formatted date|The ISO-8601-formatted date (in UTC) this Team was created|
|`eventID` |integer|The ID of the Event this Team is associated with|
|`eventName` |string|The name of the Event this Team is associated with|
|`fundraisingGoal` |float|The Team's goal|
|`isInviteOnly` |boolean|If (true), the team is only open to new members by invitation|
|`name` |string|The Team's name|
|`numDonations` |integer|The number of donations this Team has received|
|`sumDonations` |float|The total sum of donations this Team has received|
|`teamID` |integer|The unique ID of the Team|
