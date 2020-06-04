# Events

Active Events in this instance of DonorDrive.

## Endpoints

Default `orderBy`: `startDateUTC ASC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/events`|`Array`||
|`/api/events/{eventID}`|`Object`|To find `{eventID}`, visit your Event's Fundraising Page. Look for the `&eventID=` URL parameter.|

## Response

The response from the `events` endpoint is an array of, or a single event object.

### Example

```json
[
 {
    "eventID": 563,
    "type": "C",
    "name": "Test Donation Campaign"
  },
  {
    "endDateUTC": "2019-11-03T21:45:00.0+0000",
    "venue": "The Venue",
    "city": "The City",
    "country": "US",
    "eventID": 605,
    "province": "NY",
    "timezone": "America/New_York",
    "type": "P",
    "startDateUTC": "2019-11-02T15:45:00.0+0000",
    "name": "Test Participant Event"
  },
  {
    "eventID": 606,
    "type": "I",
    "name": "Test Personal Campaign Type Event"
  },
  {
    "endDateUTC": "2020-03-03T18:45:00.0+0000",
    "eventID": 527,
    "timezone": "America/New_York",
    "type": "T",
    "startDateUTC": "2020-03-03T15:45:00.0+0000",
    "name": "Test Ticket Event"
  }
]
```

### Fields

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|Filterable|
|---|---|---|---|---|
|`city`|`string`|The Event's city|Events with location only|`true`|
|`country`|`string`|The Event's country|Events with location only|`true`|
|`endDateUTC`|`date`|The end date (in UTC) of this Event|Events with dates only; ISO-8601 format|`true`|
|**`eventID`**|`integer`|The unique ID of the Event||`true`|
|`fundraisingGoal`|`float`|This Event's fundraising goal||`true`|
|`links`|`object`|An object containing related resources|`donate`: The donation URL for this Event<br />`stream`: The URL for the Live Fundraising(TM) stream associated with this Event|`false`|
|**`name`**|`string`|The Event's name||`true`|
|`numDonations`|`integer`|The number of donations this Event has received||`true`|
|`numParticipants`|`integer`|The number of participants associated with this Event||`false`|
|`numTeams`|`integer`|The number of teams associated with this Event||`false`|
|`province`|`string`|The Event's province/state|Events with location only|`true`|
|`startDateUTC`|`date`|The start date (in UTC) of this Event|Events with dates only; ISO-8601 format|`true`|
|`streamIsLive`|`boolean`|`true` if this Event is actively streaming on it's Fundraising Page||`true`|
|`sumDonations`|`float`|The total sum of donations this Event has received||`true`|
|`timezone`|`string`|The Event's timezone|Events with dates only|`false`|
|**`type`**|`string`|The Event's type|**`C`**: Capital Campaign; **`I`**: Personal Campaign Group; **`P`**: Participant Event; **`T`**: Ticket Event|`true`|
|`venue`|`string`|The Event's venue|Events with location only|`true`|