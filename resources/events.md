# Events

Active Events in this instance of DonorDrive.

## Endpoints

Default `orderBy`: `startDateUTC ASC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/events`|`Array`||
|`/api/events/{eventID}`|`Object`|To find `{eventID}`, visit your Event's Fundraising Page. Look for the `&eventID=` URL parameter.|
|`/api/eventgroups/{groupCode}/events`|`Array`|This feature may not be available for all instances of DonorDrive.|

## Response

The response from the `events` endpoint is an array of, or a single event object.

### Example

```json
[
 {
    "eventID": 563,
    "type": "C",
    "name": "Test Donation Campaign",
    "links": {
      "donate": "https://try.donordrive.com/index.cfm?fuseaction=donate.event&eventID=563",
      "page": "https://try.donordrive.com/index.cfm?fuseaction=donordrive.event&eventID=563"
    }
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
    "name": "Test Participant Event",
    "numParticipants": 300,
    "numTeams": 50,
    "links": {
      "donate": "https://try.donordrive.com/index.cfm?fuseaction=donordrive.event&eventID=605#donate",
      "page": "https://try.donordrive.com/index.cfm?fuseaction=donordrive.event&eventID=605"
    }
  },
  {
    "eventID": 606,
    "type": "I",
    "name": "Test Personal Campaign Type Event",
    "links": {
      "page": "https://try.donordrive.com/index.cfm?fuseaction=donordrive.event&eventID=606"
    }
  },
  {
    "endDateUTC": "2020-03-03T18:45:00.0+0000",
    "eventID": 527,
    "timezone": "America/New_York",
    "type": "T",
    "startDateUTC": "2020-03-03T15:45:00.0+0000",
    "name": "Test Ticket Event",
    "links": {
      "donate": "https://try.donordrive.com/index.cfm?fuseaction=donate.event&eventID=527",
      "page": "https://try.donordrive.com/index.cfm?fuseaction=donordrive.event&eventID=527"
    }
  }
]
```

### Fields

|Field|Type|Description|Guaranteed|Filterable|Notes|
|---|---|---|---|---|---|
|`city`|`string`|The Event's city||Yes|Events with location only|
|`country`|`string`|The Event's country||Yes|Events with location only|
|`endDateUTC`|`date`|The end date (in UTC) of this Event||Yes|Events with dates only; ISO-8601 format|
|`eventID`|`integer`|The unique ID of the Event|Yes|Yes||
|`fundraisingGoal`|`float`|This Event's fundraising goal||Yes||
|`links`|`object`|An object containing related resources|||`donate`: The donation URL for this Event<br />`page`: The URL for this Event's Fundraising Page<br />`stream`: The URL for the Live Fundraising(TM) stream associated with this Event|
|`name`|`string`|The Event's name|Yes|Yes||
|`numDonations`|`integer`|The number of donations this Event has received||Yes||
|`numParticipants`|`integer`|The number of participants associated with this Event||||
|`numTeams`|`integer`|The number of teams associated with this Event||||
|`province`|`string`|The Event's province/state||Yes|Events with location only|
|`startDateUTC`|`date`|The start date (in UTC) of this Event||Yes|Events with dates only; ISO-8601 format|
|`streamIsLive`|`boolean`|`true` if this Event is actively streaming on it's Fundraising Page||Yes||
|`sumDonations`|`float`|The total sum of donations this Event has received||Yes||
|`timezone`|`string`|The Event's timezone|||Events with dates only|
|`type`|`string`|The Event's type|Yes|Yes|**`C`**: Capital Campaign; **`I`**: Personal Campaign Group; **`P`**: Participant Event; **`T`**: Ticket Event|
|`venue`|`string`|The Event's venue||Yes|Events with location only|