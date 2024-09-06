# Events

Active Events in this instance of DonorDrive.

## Endpoints

|Path|Return Type|Notes|
|---|---|---|
|`/api/events/{eventID}`|`object`|To find `{eventID}`, visit your Event's Fundraising Page. Look for the `&eventID=` URL parameter.|

## Response

The response from the `events` endpoint is a single event object.

### Example

```json
  {
    "avatarImage": "https://assets.donordrive.com/clients/try/img/badgeLogo.jpg",
    "endDateUTC": "2019-11-03T21:45:00.0+0000",
    "venue": "The Venue",
    "city": "The City",
    "country": "US",
    "eventID": 605,
    "province": "NY",
    "timezone": "America/New_York",
    "type": "P",
    "startDateUTC": "2019-11-02T15:45:00.0+0000",
    "features": {
      "participantBadges": true,
      "participantIncentives": true,
      "participantMilestones": true,
      "teams": true,
      "teamBadges": true
    },
    "name": "Test Participant Event",
    "numParticipants": 300,
    "numTeams": 50,
    "links": {
      "donate": "https://try.donordrive.com/index.cfm?fuseaction=donordrive.event&eventID=605#donate",
      "page": "https://try.donordrive.com/index.cfm?fuseaction=donordrive.event&eventID=605"
    },
    "hasDates": true,
    "checkInEndDateUTC": "2019-11-01T15:45:00.0+0000",
    "checkinStartDateUTC": "2019-10-01T15:45:00.0+0000",
    "publishDateUTC": "2019-02-02T15:45:00.0+0000",
    "hasLocation": true,
    "latitude": 0.000,
    "longitude": 0.000
  }
```

### Fields

|Field|Type|Description|Guaranteed|Filterable|Notes|
|---|---|---|---|---|---|
|`avatarImageURL`|`string`|The URL for the avatar image associated with this Event|Yes|Yes||
|`city`|`string`|The Event's city||Yes|Events with location only|
|`checkInEndDateUTC`|`date`|The date when event check-in ends|No|No||
|`checkInStartDateUTC`|`date`|The date when event check-in begins|No|No||
|`country`|`string`|The Event's country||Yes|Events with location only|
|`description`|`string`|A brief description of this Event|||Added: 1.3|
|`endDateUTC`|`date`|The end date (in UTC) of this Event||Yes|Events with dates only; ISO-8601 format|
|`eventID`|`integer`|The unique ID of the Event|Yes|Yes||
|`expressRegistrationParticipantTypeID`|`string`|The participant type ID used for third party registration|No|No|Depends on Third Party Registration being enabled|
|`features`|`object`|Features enabled/supported in this event. See Notes for details|||Added: 1.3<br />`participantBadges`: `true` if badges are available for participants<br />`participantIncentives`: `true` if fundraising incentives are available for participants<br />`participantMilestones`: `true` if fundraising milestones are available for participants<br />`teams`: `true` if team support has been enabled<br />`teamBadges`: `true` if badges are available for teams|
|`fundraisingGoal`|`float`|This Event's fundraising goal||Yes||
|`geofenceRadius`|`integer`|The radius around the event location within which mobile check-in is available|No|No|Depends on the event having a location, latitude, and longitude|
|`hasDates`|`boolean`|`true` if the event has dates associated with it|Yes|Yes||
|`hasExpressRegistration`|`boolean`|`true` if Third Party Registration is enabled|No|Yes||
|`hasLocation`|`boolean`|`true` if a location is specified|Yes|Yes||
|`latitude`|`float`|The latitude of the event location|No|No|Depends on the event having a location|
|`longitude`|`float`|The longitude of the event location|No|No|Depends on the event having a location|
|`links`|`object`|An object containing related resources|||`donate`: The donation URL for this Event<br />`page`: The URL for this Event's Fundraising Page<br />`stream`: The URL for the Live Fundraising(TM) stream associated with this Event|
|`name`|`string`|The Event's name|Yes|Yes||
|`numDonations`|`integer`|The number of donations this Event has received||Yes||
|`numParticipants`|`integer`|The number of participants associated with this Event||||
|`numTeams`|`integer`|The number of teams associated with this Event||||
|`province`|`string`|The Event's province/state||Yes|Events with location only|
|`publishDateUTC`|`date`|The date the event was published|Yes|No||
|`startDateUTC`|`date`|The start date (in UTC) of this Event||Yes|Events with dates only; ISO-8601 format|
|`streamIsLive`|`boolean`|`true` if this Event is actively streaming on it's Fundraising Page||Yes||
|`sumActivityUnits`|`integer`|The sum of all activity tracked in the event|No|Yes|Depends on Activity Impact being enabled|
|`sumDonations`|`float`|The total sum of donations this Event has received||Yes||
|`timezone`|`string`|The Event's timezone|||Events with dates only|
|`type`|`string`|The Event's type|Yes|Yes|`C`: Capital Campaign; `I`: Personal Campaign Group; `P`: Participant Event; `T`: Ticket Event|
|`venue`|`string`|The Event's venue||Yes|Events with location only|