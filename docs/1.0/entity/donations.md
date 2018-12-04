### Get A Participant
`/api/participants/{participantID}`
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
On a successful HTTP Call, `200` OK will be returned with an object whose body will contain a Participant
#### Participant Object
|Field|Type|Description|
|---|---|---|
|`avatarImageURL` |string|The URL for the avatar image associated with the Participant|
|`campaignDate` |string-formatted date|(Personal Campaigns only) The date of the Personal Campaign|
|`campaignName` |string|(Personal Campaigns only) The name of the Personal Campaign|
|`createdDateUTC` |string-formatted date|The ISO-8601-formatted date (in UTC) this Participant was created|
|`displayName` |string|The Participant's name|
|`eventID` |integer|The ID of the Event this Participant is associated with|
|`eventName` |string|The name of the Event this Participant is associated with|
|`fundraisingGoal` |float|The Participant's individual goal|
|`isTeamCaptain` |boolean|If (true), this Participant is the captain of the team|
|`numDonations` |integer|The number of donations this Participant has received|
|`participantID` |integer|The unique ID of the Participant|
|`sumDonations` |float|The total sum of donations this Participant has received|
|`teamID` |integer|The ID of the Team this Participant is associated with|
|`teamName` |string|The name of the Team this Participant is associated with|
