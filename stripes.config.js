module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    // logCategories: 'core,connect,redux,path,mpath,action,perm,xhr'
    // logPrefix: 'stripes'
    // logTimestamp: false
    // showPerms: false
    // hasAllPerms: false
    // softLogout: false
  },
  modules: {
    '@folio/trivial': {},
    '@folio/users': {}
  }
};
