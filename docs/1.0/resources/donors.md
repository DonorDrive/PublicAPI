# Donors

Donors associated with a Participant or Team.

## Endpoints

Default `orderBy`: `modifiedDateUTC DESC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/donors`|`Array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/teams/{teamID}/donors`|`Array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|

## Response

The response from the `donors` endpoint is an array of donor objects.

### Example

```json
[
  {
    "displayName": "Friendly Donor",
    "donorID": "EB8610A3FC435D58",
    "avatarImageURL": "",
    "modifiedDateUTC": "2019-10-30T18:01:18.513+0000",
    "sumDonations": 3500,
    "numDonations": 13
  },
  {
    "displayName": "Barnabas Jungleham",
    "donorID": "C650B80FC37D7464",
    "avatarImageURL": "",
    "modifiedDateUTC": "2019-10-14T15:35:27.370+0000",
    "sumDonations": 30,
    "numDonations": 1
  },
  {
    "displayName": "Kimberly Jalapeno",
    "donorID": "63135F1FCCEABD47",
    "avatarImageURL": "",
    "modifiedDateUTC": "2019-10-07T18:36:00.343+0000",
    "sumDonations": 200,
    "numDonations": 4
  }
]
```

### Fields

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|Filterable|
|---|---|---|---|---|
|**`avatarImageURL`**|`string`|The URL for the avatar image associated with the Donor||`true`|
|**`displayName`**|`string`|The Donor's name||`true`|
|**`donorID`**|`string`|The unique ID of the Donor||`true`|
|**`modifiedDateUTC`**|`date`|The date (in UTC) this Donor last donated|ISO-8601 format|`true`|
|**`numDonations`**|`integer`|The number of Donations this Donor has made to the Participant or Team||`true`|
|**`sumDonations`**|`float`|The sum total of Donations this Donor has made to the Participant or Team||`true`|