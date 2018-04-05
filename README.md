# DonorDrive Public API

The DonorDrive Public API makes it easy to build lightweight integrations using public event, participant, and team data. The Public API is RESTful and read-only. Data is retrieved via GET requests and successful responses are returned in JSON format. The API is completely open to integrations using the interface in a responsible manner.

Please limit requests to one every 15 seconds. Please don't abuse the API, or we may be forced to rate-limit requests.

For general inquiries and requests for larger volume integrations, please email support@donordrive.com for assistance.

## Getting Started
Visit the DonorDrive instance you wish to integrate with. Make note of the domain. For example: if you visited https://try.donordrive.com you would access the api by appending one of the Entity endpoints catalogued below: https://try.donordrive.com/api/participants.

### Status Codes
A 200 Status Code will return for successful API calls. Meaningful codes + messaging will be furnished in the event of an error. Here are some other responses you may encounter.

|Status Code|Description|
|---|---|
|204|No Content - The pagination offset is out of range.|
|304|Not Modified - If ```If-None-Match``` was furnished, and the response is unmodified, a 304 will be returned instead of a payload.|
|400|Bad Request - The request could not be interpreted.|
|404|Not Found - The request could not be found for the ID or URL provided.|
|412|Precondition Failed - The version furnished is unsupported.|
|500|Internal Server Error - Technical support has been notified.|
|503|Service Unavailable - The API is unavailable or undergoing maintenance. Please try again later.|

### Response Headers
Some custom Response Headers are included to facilitate the handling of data.

|Header|Description|
|---|---|
|```API-Version```|The version of the API used to fulfill the request.|
|```ETag```|See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag for usage|
|```Last-Modified```|Can be used to compare when a record was last updated. Useful when comparing if your data is still valid.|
|```Link```|(For Array-based responses, see: http://www.rfc-editor.org/rfc/rfc5988.txt) First, Prev, Next, and Last values will be present, if applicable.|
|```Num-Records```|(For Array-based responses) The length of the entire result set.|

### Query Parameters
All Query Parameters need to be URL encoded. For example ```&where=displayName = 'bob individual1'``` would become ```&where=displayName%20%3D%20'bob%20individual1'```.

#### All Endpoints

|Query Parameter|Description|
|---|---|
|```callback```|The value provided will wrap the payload as a JSONP-formatted response.|
|```select```|The list of fields provided will be returned as the payload. If not provided, all fields are assumed.|
|```version```|The version of the API desired. If no version parameter is provided, the API will default to the oldest supported version.|

#### Array-based Endpoints

|Query Parameter|Description|
|---|---|
|```limit```|The result set will be restricted by the value defined. Default and max is set to 100. Any value above 100 will return a 400 error.|
|```where```|Value provided will follow the rules of a [SQL Where clause](https://www.w3schools.com/sql/sql_where.asp).|
|```offset```|The result set returned will start at the index furnished by offset (i.e. when working with a working set larger than the limit of 100, offset may be furnished to paginate through results).|
|```orderBy```|The specified fields will be used to create the sort-order of the response payload.|

## Entities

### Participants/Personal Campaigns
Individual fundraisers participating in an active Participant Event or Personal Campaign.

#### Fields

|Field|Description|
|---|---|
|```avatarImageURL```|The URL associated with the Participant|
|```campaignDate```|(Personal Campaigns only) The date of the Personal Campaign|
|```campaignName```|(Personal Campaigns only) The name of the Personal Campaign|
|```createdDateUTC```|The ISO-8601-formatted date (in UTC) this Participant was created|
|```displayName```|The Participant's name|
|```eventID```|The ID of the Event this Participant is associated with|
|```eventName```|The name of the Event this Participant is associated with|
|```fundraisingGoal```|The Participant's individual goal|
|```isTeamCaptain```|(Team Members only) If (1), this Participant is the captain of the team|
|```numDonations```|The number of donations this Participant has received|
|```participantID```|The unique ID of the Participant|
|```sumDonations```|The total sum of donations this Participant has received|
|```teamID```|(Team Participants only) The ID of the Team this Participant is associated with|
|```teamName```|(Team Participants only) The name of the Team this Participant is associated with|

#### Endpoints

|Path|Description|
|---|---|
|```/api/participants```|An Array of Participants|
|```/api/participants/{participantID}```|A Participant Object (To find ```{participantID}```, visit your Participant's Fundraising Page. Look for the ```&participantID=``` URL parameter.)|
|```/api/events/{eventID}/participants```|An Array of Participants associated to the Event (To find ```{eventID}```, visit your Event's Fundraising Page. Look for the ```&eventID=``` URL parameter.)|
|```/api/teams/{teamID}/participants```|An Array of Participants associated to the Team (To find ```{teamID}```, visit your Team's Fundraising Page. Look for the ```&teamID=``` URL parameter.)|

### Teams
Teams participating in an active Participant Event

#### Fields

|Field|Description|
|---|---|
|```avatarImageURL```|The URL associated with the Team|
|```createdDateUTC```|The ISO-8601-formatted date (in UTC) this Team was created|
|```eventID```|The ID of the Event this Team is associated with|
|```eventName```|The name of the Event this Team is associated with|
|```fundraisingGoal```|The Team's goal|
|```name```|The Team's name|
|```numDonations```|The number of donations this Team has received|
|```sumDonations```|The total sum of donations this Team has received|
|```teamID```|The unique ID of the Team|

#### Endpoints

|Path|Description|
|---|---|
|```/api/teams```|An Array of Teams|
|```/api/teams/{teamID}```|A Team Object (To find ```{teamID}```, visit your Team's Fundraising Page. Look for the ```&teamID=``` URL parameter.)|
|```/api/events/{eventID}/teams```|An Array of Teams associated to the Event (To find ```{eventID}```, visit your Event's Fundraising Page. Look for the ```&eventID=``` URL parameter.)|

### Donors
Donors supporting Participants or Teams

#### Fields

|Field|Description|
|---|---|
|```amount```|The amount donated by this Donor|
|```avatarImageURL```|The URL associated with the Donor|
|```createdDateUTC```|The ISO-8601-formatted date (in UTC) this Donor was created|
|```displayName```|The Donor's name|
|```donorID```|The unique ID of the Donor|
|```message```|A message from the Donor|
|```participantID```|(Team Participant Donors only) The ID of the Participant this Donor is associated with|
|```teamID```|(Team and Team-Participant Donors only) The ID of the Team this Donor is associated with|

#### Endpoints

|Path|Description|
|---|---|
|```/api/participants/{participantID}/donations```|An Array of Donors associated to the Participant (To find ```{participantID}```, visit your Participant's Fundraising Page. Look for the ```&participantID=``` URL parameter.)|
|```/api/teams/{teamID}/donations```|An Array of Donors associated to the Team (To find ```{teamID}```, visit your Team's Fundraising Page. Look for the ```&teamID=``` URL parameter.)|
