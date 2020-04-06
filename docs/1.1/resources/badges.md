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
    "description": "Raised 100 dollars!",
    "title": "100 Club Badge",
    "unlockedDateUTC": "2019-10-30T18:01:23.430+0000",
    "badgeImageURL": "http://assets.donordrive.com/try/images/$event508$/badge_2F7819D3_C019_3C7D_B9D716687CEEC0A5.png",
    "badgeCode": "100-club-badge"
  },
  {
    "description": "Sent 25 donation invite emails!",
    "title": "Enthusiastic Participant Badge",
    "unlockedDateUTC": "2019-09-18T15:47:39.107+0000",
    "badgeImageURL": "https://assets.donordrive.com/try/images/$event508$/badge_DCB0A883_BC0A_97DB_639B4D7BFDEC638E.png",
    "badgeCode": "enthusiastic-participant-badge"
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