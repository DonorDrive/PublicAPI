# About

Information pertaining to this DonorDrive program.

**Added in version 1.3**

## Endpoints

|Path|Return Type|Notes|
|---|---|---|
|`/api/about`|`object`||

## Response

The response from the `about` endpoint is an object.

### Example

```json
{
  "currency": {
    "symbol":"$",
    "label":"USD"
  },
  "displayName": "Try",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget velit lectus. Sed at molestie urna. Donec sed purus quis dolor consequat congue mattis non mi.",
  "programID": "1259-100",
  "avatarImageURL": "https://assets.donordrive.com/clients/try/img/badgeLogo.jpg",
  "charityName": "Try DonorDrive",
  "links": {
    "home":"https://try.donordrive.com/"
  }
}
```

### Fields

|Field|Type|Description|Guaranteed|Filterable|Notes|
|---|---|---|---|---|---|
|`avatarImageURL`|`string`|The URL for the avatar image associated with this Event|Yes|||
|`charityName`|`string`|The name of the Charity Organization associated with this Program|Yes|||
|`currency`|`object`|Default currency details for this programs|Yes||`symbol` and `label` will always be present|
|`description`|`string`|A brief description of this Program||||
|`displayName`|`string`|The friendly name for this Program|Yes|||
|`links`|`object`|An object containing related resources|||`home`: The home page for this Program<br />`register`: The registration form for the single registration event or personal campaign type associated with this Program|
|`numOpenParticipantEvents`|`integer`|The number of participant events (registration events and personal campaign types) that are currently open for registration|Yes|||
|`programID`|`string`|The unique ID of this Program|Yes|||

