# Overview

## Versioning

The DonorDrive Public API will receive updates as the needs within the platform grow, and to accommodate feature requests from the community.

Versions may be accessed by Query Parameter: https://try.donordrive.com/api/events?version=1.2

|Supported Version|Default?|
|---|---|
|1.2||
|1.1||
|1.0|Yes|

**We will support previous Versions as long as reasonably possible. We will do our best to notify the community well in advance of deprecating/dropping support for a given Version.**

## Status Codes
A 200 Status Code will return for successful API calls. Meaningful codes + messaging will be furnished in the event of an error. Here are some other responses you may encounter.

|Status Code|Description|
|---|---|
|204|No Content - The pagination offset is out of range.|
|304|Not Modified - If `If-None-Match` was furnished, and the response is unmodified, a 304 will be returned instead of a payload.|
|400|Bad Request - The request could not be interpreted.|
|404|Not Found - The request could not be found for the ID or URL provided.|
|412|Precondition Failed - The version furnished is unsupported.|
|429|Too Many Requests - You've been rate limited, take a break.|
|500|Internal Server Error - Technical support has been notified.|
|503|Service Unavailable - The API is unavailable or undergoing maintenance. Please try again later.|

## Array-based Endpoints

Since version 1.1, the `offset` parameter is 0-based, so the first record has an `offset` of 0, second record has an `offset` of 1, etc. The result set returned from endpoints can be further restricted by including the following Query Parameters.

|Query Parameter|Description|Notes|
|---|---|---|
|`limit`|The result set will be restricted by the value defined. Default and max is set to 100. Any value above 100 will return a 400 error.||
|`offset`|The result set returned will start at the index furnished by offset (i.e. when working with a working set larger than the limit of 100, offset may be furnished to paginate through results).||
|`orderBy`|The specified `filterable` (see `where` below) fields will be used to create the sort-order of the response payload.|[SQL Order By](https://www.w3schools.com/sql/sql_orderby.asp)|
|`where`|Value provided will follow the rules of a SQL-style `where` clause. Note that not all columns are `filterable` using the `where` clause. For each column in the response field list for an endpoint, the `filterable` column specifies whether or not it can be used within a `where` clause.|[SQL Where](https://www.w3schools.com/sql/sql_where.asp)|

## Response Headers

The following response headers are included to facilitate the handling of data.

|Header|Description|Notes|
|---|---|---|
|`API-Version`|The version of the API used to fulfill the request.||
|`Cache-Control`|See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control for usage||
|`ETag`|See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag for usage||
|`Last-Modified`|Can be used to compare when a record was last updated. Useful when comparing if your data is still valid.||
|`Link`|First, Prev, Next, and Last values will be present, if applicable.|For Array-based responses; [RFC](http://www.rfc-editor.org/rfc/rfc5988.txt)|
|`Num-Records`|The number of records within the entire result set.|For Array-based responses|
