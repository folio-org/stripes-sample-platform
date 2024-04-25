# Stripes sample platform

This is an example of a Stripes "platform". It consists simply of an NPM [`package.json`](https://docs.npmjs.com/files/package.json) that specifies the version of `@folio/stripes` and of any Stripes modules you wish to make available to generate client bundles.

Please see the [Developing UI Modules with Stripes](https://folio-org.atlassian.net/wiki/x/DQBpCQ) for more information.

The `stripes.config.js` is a configuration for a specific tenant. In general, a platform supports multiple tenants, each of which may include a different set of the available modules.

## Running the sample platform locally

* Install NodeJS >= 18
* Run `yarn`
* Run `yarn stripes serve stripes.config.js`

## Deploying the sample platform

* Install NodeJS >=
* Run `yarn`
* Run `yarn stripes build stripes.config.js`
* This will generate a bundle in `./output`; copy these assets to your HTTP server
