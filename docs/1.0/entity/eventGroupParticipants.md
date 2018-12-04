### Get an Event Groups Participants
`/api/eventgroups/{groupCode}/participants`
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
On a successful HTTP Call, `200` OK will be returned with an object whose body will contain an event groups participants.
#### Event Group Participants Object
|Field|Type|Description|
|---|---|---|
|`avatarImageURL` |string|The URL for the avatar image associated with the Participant|
|`createdDateUTC` |string-formatted date|The ISO-8601-formatted date (in UTC) this Participant was created|
|`displayName` |string|The Participant's name|
|`eventID` |integer|The ID of the Event this Participant is associated with|
|`eventName` |string|The name of the Event this Participant is associated with|
|`fundraisingGoal` |float|The Participant's individual goal|
|`numDonations` |integer|The number of donations this Participant has received|
|`participantID` |integer|The unique ID of the Participant|
|`sumDonations` |float|The total sum of donations this Participant has received|
|`sumPledges` |integer|The total sum of pledges this Participant has received|
