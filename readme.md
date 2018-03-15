# DonorDrive API

## Getting Started
Requests to the DonorDrive API follow the Restful scheme. Data is retrieved using standard HTTPS requests and returned in a JSON format. Currently, the GET method is the only supported request type.
### DonorDrive Team ID, Participant ID, and Event ID
| Command | Description | Example |
| --- | --- | --- |
| teamID | A unique string identifying a specific team that persists across events. Can be obtained via frontend from the URL or admin dashboard. | 39065 |
| participantID | A unique string identifying a single participant/constituent. Can be obtained via frontend from the URL or admin dashboard. | 302374 |
| eventID |  A unique string identifying an event. Can be obtained via frontend from the URL or admin dashboard. | 539 |
### Pagination
### Response Status Codes
## API Endpoint Reference
### Get Participants In A Team
'''
/teams/{teamID}/participants
'''
### Get Donations In A Team
'''
/teams/{teamID}/donations
'''
### Get Team
'''
/teams/{teamID}
'''
### Get Teams
'''
/teams
'''
### Get Participant Donations
'''
/participants/{participantID}/donations
'''
### Get Participant
'''
/participants/{participantID}
'''
### Get Participants
'''
/participants
'''
### Get Event Teams
'''
/events/{eventID}/teams
'''
### Get Event Participants
'''
/events/{eventID}/participants
'''
