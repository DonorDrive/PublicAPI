# Impact

The impact of a participant's recruitment and fundraising efforts.

## Endpoints

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/impact`|`Array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|

## Response

The response from the `impact` endpoint is an array of objects, with a maximum length of 3, representing the impact of the participant using different depths.

depth = 1 represents the fundraising of the participant

depth = 2 represents the fundraising of the participant's recruits

depth = 3 represents the fundraising of the recruits of the participant's recruits, and all depths below 

### Example

```json
[
  {
    "sumDonations": 450,
    "depth": 1,
    "numRecruits": 1
  },
  {
    "sumDonations": 1500,
    "depth": 2,
    "numRecruits": 4
  },
  {
    "sumDonations": 3100,
    "depth": 3,
    "numRecruits": 15
  }
]
```

### Fields

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|Filterable|
|---|---|---|---|---|
|**`depth`**|`integer`|The depth representing the level of participant recruitment||`false`|
|**`numRecruits`**|`integer`|The number of recruits at this depth||`false`|
|**`sumDonations`**|`float`|The sum of all donations received at this depth||`false`|