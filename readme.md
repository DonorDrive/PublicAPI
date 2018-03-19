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
| 400 | Bad Request - The request could not be interpreted. |
| 403 | Forbidden - All requests must be made via HTTPS |
| 404 | Not Found - The request could not be found for the ID or URL Provided |
| 415 | Unsupported Media Type - Please specify a valid response type |
| 429 | Too Many Requests - Please wait for existing request to process before trying again |
| 500 | Internal Server Error; Technical support has been notified |
| 503 | Service Unavailable - The API service is currently unable to handle requests due to a temporary condition. |
## API Endpoint Reference
### Get Participants In A Team
```
/teams/{teamID}/participants
```
### Get Donations In A Team
```
/teams/{teamID}/donations
```
### Get Team
```
/teams/{teamID}
```
### Get Teams
```
/teams
```
### Get Participant Donations
```
/participants/{participantID}/donations
```
### Get Participant
```
/participants/{participantID}
```
### Get Participants
```
/participants
```
### Get Event Teams
```
/events/{eventID}/teams
```
### Get Event Participants
```
/events/{eventID}/participants
```
