# Team Groups

Team Groups associated with this instance of DonorDrive

**This feature may not be available for all instances of DonorDrive.**

## Endpoints

|Path|Return Type|Notes|
|---|---|---|
|`/api/teamgroups/{groupCode}`|`Object`|To find `{groupCode}`, contact your DonorDrive Administrator.|

## Response

The response from the `teamgroups` endpoint is a team group object.

### Example

```json
[
  {
    "numParticipants": 80,
    "fundraisingGoal": 10000,
    "numTeams": 15,
    "groupCode": "dd",
    "sumDonations": 2500,
    "name": "DonorDrive",
    "numDonations": 55
  }
]
```

### Fields

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|Filterable|
|---|---|---|---|---|
|**`fundraisingGoal`**|`float`|This Team Group's goal||`false`|
|**`groupCode`**|`string`|The key associated with this Team Group||`false`|
|**`name`**|`string`|The name of this Team Group||`false`|
|**`numDonations`**|`integer`|The number of donations this Team Group has received||`false`|
|**`numParticipants`**|`integer`|The number of participants associated with this Team Group||`false`|
|**`numTeams`**|`integer`|The number of teams associated with this Team Group||`false`|
|**`sumDonations`**|`float`|The total sum of donations this Team Group has received||`false`|