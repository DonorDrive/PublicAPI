### Get Events
`/api/events`
#### Supported Query Parameters
|Query Parameter|Description|
|---|---|
|`callback`|The value provided will wrap the payload as a JSONP-formatted response.|
|`version`|The version of the API desired. If no version parameter is provided, the API will default to the oldest supported version.|
#### Path Parameters

#### Response format
On a successful HTTP Call, `200` OK will be returned with an object whose body will contain events.
### Get Event
`/api/event/{eventID}`
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
On a successful HTTP Call, `200` OK will be returned with an object whose body will contain an event.
#### Events Object
|Field|Type|Description|
|---|---|---|
|`name` |string|The name of the event|
|`endDateUTC` |string-formatted date|The ISO-8601-formatted date (in UTC) of the events end date|
|`timezone` |string|The timezone the event occurs in|
|`type` |string|The event type|
|`startDateUTC` |string|The ISO-8601-formatted date (in UTC) of the events end date|
|`eventID` |integer|The unique ID of the event|
