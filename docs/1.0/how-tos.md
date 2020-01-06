# How-Tos

## Getting Started
Visit the DonorDrive instance you wish to integrate with. Make note of the domain.

For example: if you visited https://try.donordrive.com you would access the API by appending one of the resource endpoints cataloged below: https://try.donordrive.com/api/events.

If there's a particular *how-to* you don't see listed below or in the [Demos](/docs/1.0/demos.md) section, don't hesitate to put in an issue.

---

### Getting an Event
`https://try.donordrive.com/api/events`
### Getting an Event's teams
`https://try.donordrive.com/api/events/508/teams`
### Getting a Team's Participants
`https://try.donordrive.com/api/teams/8580/participants`
### Getting a Participant's Details
`https://try.donordrive.com/api/participants/15882`
### Getting a Participant's Donations
`https://try.donordrive.com/api/participants/15882/donations`
### Getting a Participant's Top Donor using the limit and orderBy clauses
`https://try.donordrive.com/api/participants/15882/donors?limit=1&orderBy=sumDonations%20DESC`
### Getting all Participants from an event with 'bob' in their name using the where clause
`https://try.donordrive.com/api/events/508/participants?where=displayName%20LIKE%20%27%25bob%25%27`
