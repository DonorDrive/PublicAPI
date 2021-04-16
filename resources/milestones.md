# Milestones

Fundraiser Milestones associated with a Participant.

**This feature may not be available for all instances of DonorDrive.**

## Endpoints

Default `orderBy`: `amount ASC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/milestones`|`Array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|

## Response

The response from the `milestones` endpoint is an array of milestone objects.

### Example

```json
[
  {
    "fundraisingGoal": 1000,
    "description": "Pie in the face!",
    "milestoneID": "F611075E-B722-E1A7-C91690575DD48210",
    "isActive": true,
    "isComplete": true
  },
  {
    "fundraisingGoal": 2500,
    "description": "I'll eat a spoonful of hot sauce!",
    "milestoneID": "200F1E52-EDD2-3E85-CD951C029594E855",
    "isActive": true,
    "isComplete": true
  },
  {
    "fundraisingGoal": 5000,
    "description": "I'll dye my hair!",
    "links": {
      "donate": "https://try.donordrive.com/index.cfm?fuseaction=donorDrive.participant&participantID=15882&donationAmount=401.50#donate"
    },
    "milestoneID": "22BA1A3A-1234-FF6A-394361D3FF9304FF",
    "isActive": true
  }
]
```

### Fields

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|Filterable|
|---|---|---|---|---|
|**`description`**|`string`|A text description of this Fundraiser Milestone||`true`|
|**`fundraisingGoal`**|`float`|The amount of this Fundraiser Milestone||`true`|
|**`isActive`**|`string`|Added: 1.2<br/>`true` if this Fundraiser Milestone is currently active||`true`|
|`isComplete`|`boolean`|`true` if this Fundraiser Milestone has been reached||`false`|
|`links`|`object`|An object containing related resources|`donate`: The donation URL for this Fundraiser Milestone|`false`|
|**`milestoneID`**|`string`|The unique ID of this Fundraiser Milestone||`true`|
|`endDateUTC`|`date`|If present, the date (in UTC) this Fundraiser Milestone becomes unavailable|ISO-8601 format|`true`|
|`startDateUTC`|`date`|If present, the date (in UTC) this Fundraiser Milestone became available|ISO-8601 format|`true`|