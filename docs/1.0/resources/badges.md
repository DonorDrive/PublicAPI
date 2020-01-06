# Badges

Achievement Badges associated with a Participant or Team.

**This feature may not be available for all instances of DonorDrive.**

## Endpoints

Default `orderBy`: `unlockedDateUTC DESC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/badges`|`Array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/teams/{teamID}/badges`|`Array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|

## Response

The response from the `badges` endpoint is an array of badge objects.

### Example

```json
[
  {
    "description": "Raised 250 dollars!",
    "title": "250 Club Badge",
    "unlockedDateUTC": "2019-10-30T18:01:23.430+0000",
    "badgeImageURL": "",
    "badgeCode": "250-club-badge"
  },
  {
    "description": "Sent 25 donation invite emails!",
    "title": "Enthusiastic Participant Badge",
    "unlockedDateUTC": "2019-09-18T15:47:39.107+0000",
    "badgeImageURL": "",
    "badgeCode": "enthusiastic-participant-badge"
  },
  {
    "description": "Connect with your Facebook account.",
    "title": "They're All Watching Me",
    "unlockedDateUTC": "2019-09-17T16:31:40.840+0000",
    "badgeImageURL": "",
    "badgeCode": "they-re-all-watching-me"
  }
]
```

### Fields

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|Filterable|
|---|---|---|---|---|
|**`badgeCode`**|`string`|The code associated with this Badge||`true`|
|**`badgeImageURL`**|`string`|The URL for the image associated with this Badge||`false`|
|**`description`**|`string`|The description of this Badge|Honors `Accept-Language` header|`true`, `LIKE` operator recommended|
|**`title`**|`string`|The title of this Badge|Honors `Accept-Language` header|`true`, `LIKE` operator recommended|
|**`unlockedDateUTC`**|`date`|The date this Badge was unlocked by the Participant or Team|ISO-8601 format|`true`|