module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    reduxLog: true,
    disableAuth: true
    // candidate logCategories: 'core,redux,path,mpath,action,xhr'
  },
  modules: {
    '@folio/trivial': {},
    '@folio/users': {}
  }
};
