### Get A Particiants Badges
`/api/participants/{participantID}/badges`
#### Supported Query Parameters
|Query Parameter|Description|
|---|---|
|`callback`|The value provided will wrap the payload as a JSONP-formatted response.|
|`version`|The version of the API desired. If no version parameter is provided, the API will default to the oldest supported version.|
#### Path Parameters
|Field|Description|
|---|---|
|`participantID`| The unique ID of the participant |
#### Response format
On a successful HTTP Call, `200` OK will be returned with an object whose body will contain a Participants Badges.
#### Participant Badge Object
|Field|Type|Description|
|---|---|---|
|`badgeImageURL` |string|The URL for the avatar image associated with the badge|
|`description` |string|The badges description|
|`title` |string|The badges title|
|`unlockedDateUTC` |string-formatted date|The ISO-8601-formatted date (in UTC) this badge was awarded|
|`badgeClass` |string|The CSS class associated with the badge|
