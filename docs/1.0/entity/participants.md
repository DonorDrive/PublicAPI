### Get Participants
`/api/participants`
#### Supported Query Parameters
|Query Parameter|Description|
|---|---|
|`callback`|The value provided will wrap the payload as a JSONP-formatted response.|
|`version`|The version of the API desired. If no version parameter is provided, the API will default to the oldest supported version.|
#### Path Parameters

#### Response format
On a successful HTTP Call, `200` OK will be returned with an object whose body will contain a list of participants.

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

#### Participants Object
|Field|Type|Description|
|---|---|---|
|`avatarImageURL` |string|The URL for the avatar image associated with the participant|
|`createdDateUTC` |string-formatted date|The ISO-8601-formatted date (in UTC) this participant was created|
|`displayName` |string|The participant's name|
|`eventID` |integer|The ID of the event this participant is associated with|
|`eventName` |string|The name of the event this Participant is associated with|
|`fundraisingGoal` |float|The participant's individual goal|
|`isTeamCaptain` |boolean|If (true), this participant is the captain of the team|
|`numDonations` |integer|The number of donations this Participant has received|
|`participantID` |integer|The unique ID of the Participant|
|`streamURL` |string|The youtube, mixer, or twitch URL associated with the participant|
|`sumDonations` |float|The total sum of donations this participant has received|
|`sumPledges` |integer|The total sum of pledges this participant has received|
|`teamName` |string|The name of the team the participant is associated with|
