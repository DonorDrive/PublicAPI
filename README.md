# DonorDrive Public API

The DonorDrive Public API makes it easy to build integrations using public event, participant, and team data. The Public API is RESTful and read-only. Data is retrieved via GET requests and successful responses are returned in JSON format. The API is completely open to integrations using the interface in a responsible manner.

Please limit requests to one every 15 seconds. Make use of the `etag` and `if-none-match` headers to reduce network overhead on redundant API calls. Please don't abuse the API, or we may be forced to rate-limit requests. A reasonable example of the interval is as follows: when updating a streaming overlay, polling the participant endpoint every 15 seconds and checking for a change in `etag` (HTTP 200). If a change is detected, use the participantID to get additional information from nested endpoints, and display the combined information on the streaming overlay.

For general inquiries and requests for larger volume integrations, please email support@donordrive.com for assistance.

## Table of Contents
* [Overview](overview.md)
* [How-Tos](how-tos.md)
* [Demos](demos.md)
* Resources
  * [Activity](resources/activity.md)
  * [Badges](resources/badges.md)
  * [Donations](resources/donations.md)
  * [Donors](resources/donors.md)
  * [Events](resources/events.md)
  * [Incentives](resources/incentives.md)
  * [Milestones](resources/milestones.md)
  * [Participants](resources/participants.md)
  * [Teams](resources/teams.md)
  * [Team Groups](resources/teamgroups.md)