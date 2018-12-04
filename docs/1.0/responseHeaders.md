### Response Headers
Some custom Response Headers are included to facilitate the handling of data.

|Header|Description|
|---|---|
|`API-Version`|The version of the API used to fulfill the request.|
|`Cache-Control`|See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control for usage|
|`ETag`|See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag for usage|
|`Last-Modified`|Can be used to compare when a record was last updated. Useful when comparing if your data is still valid.|
|`Link`|(For Array-based responses, see: http://www.rfc-editor.org/rfc/rfc5988.txt) First, Prev, Next, and Last values will be present, if applicable.|
|`Num-Records`|(For Array-based responses) The length of the entire result set.|
