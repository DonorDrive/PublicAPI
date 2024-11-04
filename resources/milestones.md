# Milestones

Fundraiser Milestones associated with a Participant.

**This feature may not be available for all instances of DonorDrive.**

## Endpoints

Default `orderBy`: `amount ASC`

|Path|Return Type|Notes|
|---|---|---|
|`/api/participants/{participantID}/milestones`|`array`|To find `{participantID}`, visit your Participant's Fundraising Page. Look for the `&participantID=` URL parameter.|
|`/api/teams/{teamID}/milestones`|`array`|To find `{teamID}`, visit your Team's Fundraising Page. Look for the `&teamID=` URL parameter.|

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
      "donate": "https://testdrive.donordrive.com/index.cfm?fuseaction=donorDrive.participant&participantID=15882&donationAmount=401.50#donate"
    },
    "milestoneID": "22BA1A3A-1234-FF6A-394361D3FF9304FF",
    "isActive": true
  }
]
```

### Fields

|Field|Type|Description|Guaranteed|Filterable|Notes|
|---|---|---|---|---|---|
|`description`|`string`|A text description of this Fundraiser Milestone|Yes|Yes||
|`fundraisingGoal`|`float`|The amount of this Fundraiser Milestone|Yes|Yes||
|`isActive`|`string`|`true` if this Fundraiser Milestone is currently active|Yes|Yes|Added: 1.2|
|`isComplete`|`boolean`|`true` if this Fundraiser Milestone has been reached||Yes||
|`links`|`object`|An object containing related resources||Yes|`donate`: URL to donate the exact amount to reach Fundraiser Milestone|
|`milestoneID`|`string`|The unique ID of this Fundraiser Milestone|Yes|Yes||
|`endDateUTC`|`date`|If present, the date (in UTC) this Fundraiser Milestone becomes unavailable||Yes|ISO-8601 format|
|`startDateUTC`|`date`|If present, the date (in UTC) this Fundraiser Milestone became available||Yes|ISO-8601 format|