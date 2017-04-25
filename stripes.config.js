module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    // candidate logCategories: 'core,connect,redux,path,mpath,action,perm,xhr'
    // logPrefix
    // logTimestamp
    // showPerms
    // hasAllPerms
    // softLogout (boolean)
  },
  modules: {
    '@folio/trivial': {},
    '@folio/users': {}
  }
};
