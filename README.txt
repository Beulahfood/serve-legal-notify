SERVE LEGAL NOTIFY — STARTER PROTOTYPE

This is a visual Progressive Web App starter. It is NOT connected to Serve Legal and does not log in, read audits, or perform background checks yet.

Files:
- index.html / styles.css: dashboard
- app.js: test-notification button
- sw.js: service worker
- manifest.webmanifest and icon PNGs: installable-app metadata

Important:
1. Browser notifications and iPhone Home Screen web push require HTTPS for normal use.
2. The test button only tests a local notification; true remote push needs a push subscription and a backend.
3. Audit monitoring requires an authorised way to access your own audit statuses. Do not add your Serve Legal password to these files or share it.
4. Five-minute checks are a target, not a guarantee; the hosting provider and permitted access method will determine feasibility.

Next: publish this folder to an HTTPS static host, open it in Safari, test notification permissions, then use Share > Add to Home Screen. The real push backend and status connector are later steps.
