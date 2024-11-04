# Badges

Achievement Badges associated with a Participant or Team.

**This feature may not be available for all instances of DonorDrive.**

## Endpoints

Default `orderBy`: `unlockedDateUTC DESC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/badges`|`array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/teams/{teamID}/badges`|`array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|

## Response

The response from the `badges` endpoint is an array of badge objects.

### Example

```json
[
  {
    "description": "Log your first activity",
    "isUnlocked": true,
    "title": "Log your first activity",
    "unlockedDateUTC": "2020-11-18T19:32:24.373Z",
    "badgeImageURL": "https://assets.donordrive.com/try/images/$event1444$/badge_41FE3AEF_EFF5_F3B7_2E7C92C797E8D019.png",
    "badgeCode": "log-your-first-activity"
  },
  {
    "description": "Updated Profile",
    "isUnlocked": true,
    "title": "Making it Personal",
    "unlockedDateUTC": "2019-08-20T17:12:42.407Z",
    "badgeImageURL": "https://assets.donordrive.com/try/images/badge_2D23D09D_00D7_9BEA_FBA21459ADCB5AD4.png",
    "badgeCode": "making-it-personal"
  },
  {
    "description": "Log 1,000 Activity Units",
    "isUnlocked": false,
    "title": "Log 1,000 Activity Units",
    "badgeImageURL": "https://assets.donordrive.com/try/images/$event1444$/badge_420B949E_A0B7_558B_57164EF78EF9992E.png",
    "badgeCode": "log-1-000-activity-units",
    "links": {
            "page": "https://testdrive.donordrive.com/index.cfm?fuseaction=donorDrive.participant&participantID=130662"
        }
  }
]
```

### Fields

|Field|Type|Description|Guaranteed|Filterable|Notes|
|---|---|---|---|---|---|
|`badgeCode`|`string`|The code associated with this Badge|Yes|Yes||
|`badgeImageURL`|`string`|The URL for the image associated with this Badge|Yes|||
|`description`|`string`|The description of this Badge|Yes|Yes, `LIKE` operator recommended|Honors `Accept-Language` header|
|`isUnlocked`|`string`|`true` if this Badge has been unlocked by the target|Yes|Yes|Added: 1.3|
|`links`|`object`|An object containing related resources|Yes|No|`page`: The URL for the Participant's or Team's Fundraising Page|
|`title`|`string`|The title of this Badge|Yes|Yes, `LIKE` operator recommended|Honors `Accept-Language` header|
|`unlockedDateUTC`|`date`|The date this Badge was unlocked by the Participant or Team||Yes|ISO-8601 format|Changed: 1.3<br />This field is present if the Badge `isUnlocked`|