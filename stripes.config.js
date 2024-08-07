module.exports = {
  okapi: {
    // API gateway
    // 'url': 'http://localhost:9130'
    // pointing to public deployment of okapi.
    'url': 'https://folio-snapshot-okapi.dev.folio.org',

    // tenant to include in X-Okapi-Tenant HTTP request headers
    'tenant': 'diku'
  },
  config: {
    // stripes logger config
    // logCategories: 'core,redux,connect,connect-fetch,substitute,path,mpath,mquery,action,event,perm,interface,xhr',
    // logPrefix: 'stripes',
    // logTimestamp: false,

    // list permissions in the userprofile menu?
    // showPerms: false,

    // show the "home" link to / in the user-profile menu
    // showHomeLink: false,
    // listInvisiblePerms: false,

    // act as though user has all perms, i.e. <IfPermission> always returns true
    // default: FALSE
    hasAllPerms: true,

    // autoLogin: { username: 'someusername', password: 'somepassword' },
    // disableAuth: false,

    // lookup table rows to retrieve en-masse
    // maxUnpagedResourceCount: 2000,

    // prevent the console from being cleared on logout
    // preserveConsole: true,

    // hide verbose react-intl complaints
    // suppressIntlErrors: true,
    // suppressIntlWarnings: true,

    // use RTR instead of insecure legacy endpoints
    // since Q, default: FALSE
    // since R, default: TRUE, cannot be overridden
    useSecureTokens: true,
  },
  // UI modules to include
  // the same modules must be direct-dependencies in package.json
  modules: {
    '@folio/users': {},
  },
  branding: {
    // login page img and alt-text
    logo: {
      src: './tenant-assets/opentown-libraries-logo.png',
      alt: 'Opentown Libraries',
    },
    // browser tab icon
    favicon: {
      src: './tenant-assets/opentown-libraries-favicon.png',
    }
  },
};
