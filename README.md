# DonorDrive Public API

### [Click here to view documentation for the default version (1.0).](/docs/1.0/README.md)

The DonorDrive Public API makes it easy to build integrations using public event, participant, and team data. The Public API is RESTful and read-only. Data is retrieved via GET requests and successful responses are returned in JSON format. The API is completely open to integrations using the interface in a responsible manner.

Please limit requests to one every 15 seconds. Make use of the `etag` and `if-none-match` headers to reduce network overhead on redundant API calls. Please don't abuse the API, or we may be forced to rate-limit requests. A reasonable example of the interval is as follows: when updating a streaming overlay, polling the participant endpoint every 15 seconds and checking for a change in `etag` (HTTP 200). If a change is detected, use the participantID to get additional information from nested endpoints, and display the combined information on the streaming overlay.

For general inquiries and requests for larger volume integrations, please email support@donordrive.com for assistance.

## Versioning

The DonorDrive Public API will receive updates as the needs within the platform grow, and to accommodate feature requests from the community.

Our versioning strategy is as follows:

- Version formatting will follow a Major.Minor format (ex: Version `1.0`)
- New Minor Versions will be backward compatible with previous Minor Versions within the same Major Version (ex: Version `1.1` will be backwards compatible with Version `1.0`)
	- New Minor Version features will be noted in the appropriate resource documentation
- Major Versions may introduce breaking changes that are not backward compatible with previous Major Versions

**We will support previous Major Versions as long as reasonably possible, and do our best to notify the community well in advance of dropping support for a given Major Version.**

|Version|Status|
|---|---|
|[1.0](/docs/1.0/README.md)|Default|
|[1.1](/docs/1.1/README.md)||

[Change log](/docs/1.0/changelog.md)

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
