# Teams

Teams participating in an active Participant Event

#### Endpoints

Default `orderBy`: `createdDateUTC DESC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/teams`|`Array`||
|`/api/teams/{teamID}`|`Object`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|
|`/api/eventgroups/{groupCode}/teams`|`Array`|This feature may not be available for all instances of DonorDrive.|
|`/api/events/{eventID}/teams`|`Array`|To find `{eventID}`, visit your Event's Fundraising Page. Look for the `&eventID=` URL parameter.|
|`/api/teamgroups/{groupCode}/teams`|`Array`|This feature may not be available for all instances of DonorDrive|

## Response

The response from the `teams` endpoint is an array of, or a single team object.

### Example

```json
[
  {
    "numParticipants": 5,
    "fundraisingGoal": 20000,
    "eventName": "Test Participant Event",
    "links": {
      "donate": "https://ssharma.globalcloud.net/donordrive/index.cfm?fuseaction=donorDrive.team&teamID=5074#donate",
      "page": "https://ssharma.globalcloud.net/donordrive/index.cfm?fuseaction=donorDrive.team&teamID=5074"
    },
    "createdDateUTC": "2019-11-02T15:02:38.93+0000",
    "eventID": 581,
    "sumDonations": 9349.5,
    "name": "The Bonhams",
    "isInviteOnly": false,
    "captainDisplayName": "Liam Bonham",
    "avatarImageURL": "",
    "teamID": 5074,
    "sumPledges": 0,
    "numDonations": 97
  },
  {
    "numParticipants": 11,
    "fundraisingGoal": 5000,
    "eventName": "Test Participant Event",
    "links": {
      "donate": "https://ssharma.globalcloud.net/donordrive/index.cfm?fuseaction=donorDrive.team&teamID=5073#donate",
      "page": "https://ssharma.globalcloud.net/donordrive/index.cfm?fuseaction=donorDrive.team&teamID=5073"
    },
    "createdDateUTC": "2019-10-24T13:51:25.137+0000",
    "eventID": 581,
    "sumDonations": 2433,
    "name": "#1 Fundraising Team",
    "isInviteOnly": false,
    "captainDisplayName": "Jimbo Nance",
    "avatarImageURL": "",
    "teamID": 5073,
    "sumPledges": 0,
    "numDonations": 41
  }
]
```

### Fields

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|Filterable|
|---|---|---|---|---|
|**`avatarImageURL`**|`string`|The URL for the avatar image associated with this Team||`true`|
|**`captainDisplayName`**|`string`|The captain Participant's name||`true`|
|**`createdDateUTC`**|`date`|The date (in UTC) this Team was created|ISO-8601 format|`true`|
|**`eventID`**|`integer`|The ID of the Event this Team is associated with||`true`|
|**`eventName`**|`string`|The name of the Event this Team is associated with||`false`|
|**`fundraisingGoal`**|`float`|This Team's goal||`true`|
|**`isInviteOnly`**|`boolean`|Does this Team restrict registration to invitations-only||`true`|
|`links`|`object`|An object containing related resources|`donate`: The donation URL for this Team<br />`page`: The URL for this Team's Fundraising Page|`false`|
|**`name`**|`string`|This Team's name||`true`|
|**`numDonations`**|`integer`|The number of donations this Team has received||`true`|
|**`numParticipants`**|`integer`|The number of participants associated with this team||`true`|
|**`sumDonations`**|`float`|The total sum of donations this Team has received||`true`|
|**`teamID`**|`integer`|The unique ID of this Team||`true`|