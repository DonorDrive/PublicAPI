# API Version 1.0

## Response Headers
Some custom Response Headers are included to facilitate the handling of data.

|Header|Description|
|---|---|
|`API-Version`|The version of the API used to fulfill the request.|
|`Cache-Control`|See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control for usage|
|`ETag`|See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag for usage|
|`Last-Modified`|Can be used to compare when a record was last updated. Useful when comparing if your data is still valid.|
|`Link`|(For Array-based responses, see: http://www.rfc-editor.org/rfc/rfc5988.txt) First, Prev, Next, and Last values will be present, if applicable.|
|`Num-Records`|(For Array-based responses) The length of the entire result set.|

## Array-based Endpoints

|Query Parameter|Description|
|---|---|
|`limit`|The result set will be restricted by the value defined. Default and max is set to 100. Any value above 100 will return a 400 error.|
|`offset`|The result set returned will start at the index furnished by offset (i.e. when working with a working set larger than the limit of 100, offset may be furnished to paginate through results).|
|`orderBy`|The specified fields will be used to create the sort-order of the response payload.|
|`where`|Value provided will follow the rules of a [SQL Where clause](https://www.w3schools.com/sql/sql_where.asp).|

## Table of Contents
#### Donordrive API
* Guides
  * [Tutorial](https://github.com/DonorDrive/PublicAPI/blob/DD-13372-update-documentation/docs/1.0/tutorial.md)
  * [Demos](https://github.com/DonorDrive/PublicAPI/blob/DD-13372-update-documentation/docs/1.0/demos.md)
* Resource Reference
  * [Activity](https://github.com/DonorDrive/PublicAPI/blob/DD-13372-update-documentation/docs/1.0/resources/activity.md)
  * [Badges](https://github.com/DonorDrive/PublicAPI/blob/DD-13372-update-documentation/docs/1.0/resources/badges.md)
  * [Donations](https://github.com/DonorDrive/PublicAPI/blob/DD-13372-update-documentation/docs/1.0/resources/donations.md)
  * [Events](https://github.com/DonorDrive/PublicAPI/blob/DD-13372-update-documentation/docs/1.0/resources/events.md)
  * [Participants](https://github.com/DonorDrive/PublicAPI/blob/DD-13372-update-documentation/docs/1.0/resources/participants.md)
  * [Teams](https://github.com/DonorDrive/PublicAPI/blob/DD-13372-update-documentation/docs/1.0/resources/teams.md)
