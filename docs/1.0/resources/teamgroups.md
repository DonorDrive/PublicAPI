### Team Groups
Team Groups associated with this instance of DonorDrive

**This feature may not be available for all instances of DonorDrive.**

#### Fields

Fields in **bold** are guaranteed in the response payload.

|Field|Type|Description|Notes|
|---|---|---|---|
|**`fundraisingGoal`**|`float`|The cumulative team-level goals associated with this Team Group||
|**`groupCode`**|`string`|The key associated with this Team Group||
|**`name`**|`string`|The name of this Team Group||
|**`numDonations`**|`integer`|The number of donations this Team Group has received||
|**`numParticipants`**|`integer`|The number of participants associated with this Team Group||
|**`numTeams`**|`integer`|The number of participants associated with this Team Group||
|**`sumDonations`**|`float`|The total sum of donations this Team Group has received||

#### Endpoints

|Path|Return Type|Notes|
|---|---|---|
|`/api/teamgroups/{groupCode}`|`Object`|To find `{groupCode}`, contact your DonorDrive Administrator.|