# Stripes sample platform

This is an example of a Stripes "platform". It consists simply of an NPM [`package.json`](https://docs.npmjs.com/files/package.json) that specifies the version of `@folio/stripes` and of any Stripes modules you wish to make available to generate client bundles.

Please see the [quick start guide](https://github.com/folio-org/stripes/blob/master/doc/quick-start.md) for more information.

The `stripes.config.js` is a configuration for a specific tenant. In general, a platform supports multiple tenants, each of which may include a different set of the available modules.
Copy the `stripes.config.js` file to be your `stripes.config.js.local` configuration file.
