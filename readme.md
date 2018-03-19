# DonorDrive API

## Getting Started
Requests to the DonorDrive API follow the Restful scheme. Data is retrieved using standard HTTP requests and returned in a JSON format. Currently, the GET method is the only supported request type.
### DonorDrive Team ID, Participant ID, and Event ID
| Command | Description | Example |
| --- | --- | --- |
| teamID | A unique string identifying a specific team that persists across events. Can be obtained from the participants/teams URL. | 39065 |
| participantID | A unique string identifying a single participant/constituent. Can be obtained from the participants/teams URL. | 302374 |
| eventID |  A unique string identifying an event. Can be obtained from the participants/teams URL. | 539 |
### Pagination
### Response
All data is returned as a JSON object.
### Timestamps
Timestamps are returned in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format using [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) as a designator. The format returned is `yyyy-mm-ddThh:mm:ss.nnnnnn+hh:mm` with a zero offset.
### Response Status Codes
| Status Code | Description |
| --- | --- |
| 200 | OK - The request was successful. A JSON object and http headers should be returned |
| 204 | No Content - The pagination offset is out of range. |
| 400 | Bad Request - The request could not be interpreted. |
| 404 | Not Found - The request could not be found for the ID or URL Provided. |
| 412 | Precondition Failed - The version furnished is unsupported. |
| 415 | Unsupported Media Type - Please specify a valid response type |
| 429 | Too Many Requests - Please wait for existing request to process before trying again |
| 500 | Internal Server Error; Technical support has been notified |
| 503 | Service Unavailable - The Request resource is not currently cached. |
## URL Parameters
All URL Parameters need to be URL encoded.
Un-encoded URL
```
/events/{eventID}/participants&where=displayName = 'bob individual1'
```
Properly Encoded URL
```
/events/{eventID}/participants&where=displayName%20%3D%20'bob%20individual1'
```
#### All Endpoints
| Query Parameter | Description |
| --- | --- |
| callback | The value provided will wrap the payload as a JSON-P-formatted response. |
| select | The list of fields provided will be returned as the payload. If not provided, all fields are assumed. |
| version | The response format of the specified version will be used (if it is still available), otherwise, default to the oldest supported version. |

Example:
```
/events/{eventID}/participants?callback=json&version=1.0&select=displayName,eventName,createdDateUTC
```
#### Multiple Records
| Query Parameter | Description |
| --- | --- |
| where | Value provided will follow the rules of a [SQL Where clause](https://www.w3schools.com/sql/sql_where.asp). |
| orderBy | The specified fields will be used to create the sort-order of the response payload |
| limit | The result set will be restricted by the value defined. Default and max is set to 100. Any value above 100 will return a 400 error. |
| offset | The result set returned will start at the index furnished by offset (i.e. when working with a working set larger than the limit of 100, offset may be furnished to paginate through results). |

Example:
```
/events/{eventID}/participants?limit=5&orderBy=displayName&where=displayName%20%3D%20'bob%20individual1'
```
## API Endpoint Reference
#### Get Participants In A Team
```
/teams/{teamID}/participants
```
#### Get Donations In A Team
```
/teams/{teamID}/donations
```
#### Get Team
```
/teams/{teamID}
```
#### Get Teams
```
/teams
```
#### Get Participant Donations
```
/participants/{participantID}/donations
```
#### Get Participant
```
/participants/{participantID}
```
#### Get Participants
```
/participants
```
#### Get Event Teams
```
/events/{eventID}/teams
```
#### Get Event Participants
```
/events/{eventID}/participants
```

## Response Headers
| Header | Description |
| --- | --- |
| Status Code | Status of returned response. |
| API-Version | The version of the API used to fulfill the request. |
| Cache-Control | TBA |
| Last-Modified | For a single record, refers to the _cacheModifiedDateUTC of that record. If multiple records are returned, refers to the _cacheModifiedDateUTC of the most recently modified record within the working set. |
| Link | based on context of the requested resource. |
| Num-Records | The record count of the entire result set. Only returned if the request contains multiple records. |
