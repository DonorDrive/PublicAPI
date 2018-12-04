### Get Event Particiants
`/api/event/{eventID}/participants`
#### Supported Query Parameters
|Query Parameter|Description|
|---|---|
|`callback`|The value provided will wrap the payload as a JSONP-formatted response.|
|`version`|The version of the API desired. If no version parameter is provided, the API will default to the oldest supported version.|
#### Path Parameters
|Field|Description|
|---|---|
|`eventID`| The unique ID of the event |
#### Response format
On a successful HTTP Call, `200` OK will be returned with an object whose body will contain an events Participants.
#### Event Participants Object
|Field|Type|Description|
|---|---|---|
|`amount` |float|The amount of this Donation|
|`avatarImageURL` |string|The URL for the avatar image associated with the donor|
|`createdDateUTC` |string-formatted date|The ISO-8601-formatted date (in UTC) this Donation was created|
|`displayName` |string|The donor's name|
|`donorID` |string|The unique ID of the Donation|
|`message` |string|A message from the donor|
|`participantID` |integer|The ID of the Participant this Donation is associated with|
|`teamID` |integer|The ID of the Team this Donation is associated with|
