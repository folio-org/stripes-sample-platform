module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    // autoLogin: { username: 'diku_admin', password: 'admin' }
    // logCategories: 'core,connect,substitute,redux,path,mpath,action,perm,interface,xhr'
    // logPrefix: 'stripes'
    // logTimestamp: false
    // showPerms: false
    // listInvisiblePerms: false
    // disableAuth: false
    // hasAllPerms: false
    // softLogout: false
  },
  modules: {
    '@folio/trivial': {},
    '@folio/users': {}
  }
};
