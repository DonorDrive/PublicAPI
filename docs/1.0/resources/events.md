### Events
Active Events in DonorDrive

#### Fields

Fields in bold are guaranteed in the response payload.

|Field|Type|Description|Notes|
|---|---|---|---|
|`city`|`string`|The Event's city|Events with location only|
|`country`|`string`|The Event's country|Events with location only|
|`endDateUTC`|`string-formatted date`|The ISO-8601-formatted end date (in UTC) of this Event|Events with dates only|
|**`eventID`**|`integer`|The unique ID of the Event||
|**`name`**|`string`|The Event's name||
|`province`|`string`|The Event's province/state|Events with location only|
|`startDateUTC`|`string-formatted date`|The ISO-8601-formatted start date (in UTC) of this Event|Events with dates only|
|`timezone`|`string`|The Event's timezone|Events with dates only|
|**`type`**|`string`|The Event's type|**`C`**: Capital Campaign; **`I`**: Personal Campaign Group; **`P`**: Participant Event; **`T`**: Ticket Event|
|`venue`|`string`|The Event's venue|Events with location only|

#### Endpoints

|Path|Return Type|Notes|
|---|---|---|
|`/api/events`|`Array`||
|`/api/events/{eventID}`|`Object`|To find `{eventID}`, visit your Event's Fundraising Page. Look for the `&eventID=` URL parameter.|