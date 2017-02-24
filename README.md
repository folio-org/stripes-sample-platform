# Stripes sample platform

This is an example of a Stripes "platform". It consists simply of an NPM [`package.json`](https://docs.npmjs.com/files/package.json) that specifies the version of `@folio/stripes-core` and of any Stripes modules you wish to make available to generate client bundles.

Please see the [quick start guide](https://github.com/folio-org/stripes-core/blob/master/doc/quick-start.md) for more information.

The `stripes.config.js` is a configuration for a specific tenant. In general, a platform supports multiple tenants, each of which may include a different set of the available modules.
By default the system will use `stripes.config.js.example`. Copy that to `stripes.config.js` to add more configuration.
