module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    // candidate logCategories: 'core,connect,redux,path,mpath,action,perm,xhr'
    // logPrefix
    // logTimestamp
    // showPerms
    // hasAllPerms
  },
  modules: {
    '@folio/trivial': {},
    '@folio/users': {}
  }
};
