### Get A Particiants Activity
`/api/participants/{participantID}/activity`
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
On a successful HTTP Call, `200` OK will be returned with an object whose body will contain a Participants Activity.
#### Participant Activity Object
|Field|Type|Description|
|---|---|---|
|`amount` |float|The amount of the donation|
|`createdDateUTC` |string-formatted date|The ISO-8601-formatted date (in UTC) this Participant was created|
|`imageURL` |string|The URL for the avatar image associated with the donor|
|`message` |string|A message from the donor|
|`title` |string|The donors title|
|`type` |string|The type of donation|
