## DonorDrive Public API
The DonorDrive Public API makes it easy to build lightweight integrations using public event, participant, and team data. The Public API is RESTful and read-only. Data is retrieved via GET requests and successful responses are returned in JSON format. The API is completely open to integrations using the interface in a responsible manner.

Please limit requests to one every 15 seconds. Please don't abuse the API, or we may be forced to rate-limit requests. A reasonable example of the interval is as follows: when updating a streaming overlay, polling the participant endpoint every 15 seconds and checking for a change in participant donations. If a change is detected, using the participantID to get the donation amount from the donations endpoint and display the combined information on the streaming overlay.

For general inquiries and requests for larger volume integrations, please email support@donordrive.com for assistance.

## About DonorDrive
The team at [DonorDrive](https://www.donordrive.com) has one central mission - to help nonprofits raise money & do good.

We partner with hundreds of nonprofits that tackle the world’s biggest challenges - from providing access to clean water to funding medical care for children, helping the homeless, saving stray animals, and much more. Our clients power positive change & we’re proud to play a role in their work.

## Status Codes
A 200 Status Code will return for successful API calls. Meaningful codes + messaging will be furnished in the event of an error. Here are some other responses you may encounter.

|Status Code|Description|
|---|---|
|204|No Content - The pagination offset is out of range.|
|304|Not Modified - If `If-None-Match` was furnished, and the response is unmodified, a 304 will be returned instead of a payload.|
|400|Bad Request - The request could not be interpreted.|
|404|Not Found - The request could not be found for the ID or URL provided.|
|412|Precondition Failed - The version furnished is unsupported.|
|500|Internal Server Error - Technical support has been notified.|
|503|Service Unavailable - The API is unavailable or undergoing maintenance. Please try again later.|

## Versioning
#### Latest Release Version
Moving forward, the we will be supporting old versions of the API up until End of Life as noted below. When we sunset an API version, we will be fixing breaking bugs, but no additional features will be added for that version.

|Version|Status|
|---|---|
|[v1.0](https://github.com/DonorDrive/PublicAPI/blob/DD-13372-update-documentation/docs/1.0/README.md)|Current|
