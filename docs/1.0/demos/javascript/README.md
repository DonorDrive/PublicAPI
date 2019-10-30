# JavaScript DonorDrive API Demo

Launching [index.html](index.html) will open a page that you can use to generate JavaScript code snippets to call the DonorDrive Public API.
You can also use the page to hit the Public API and view the results.  It is suggested that you read the main README before using this page.

[donation-ticker.html](donation-ticker.html) takes advantage of the `etag` returned from an initial call to a resource before making a subsequent call to retrieve new/recent donations. It leverages [Vue](https://vuejs.org/), [Axios](https://github.com/axios/axios), [Moment.js](https://momentjs.com), [Numeral.js](numeraljs.com), and [Bootstrap](https://getbootstrap.com).

[streaming-overlay](streaming-overlay/index.html) is intended to be leveraged inside your favorite broadcasting software. It leverages the same client-side libraries as the donation-ticker.