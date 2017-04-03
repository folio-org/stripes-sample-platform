module.exports = {
  okapi: { 
	// 'url':'http://localhost:9130', 
	'url':'http://folio-ci10.aws.indexdata.com:9130', 
	'tenant':'diku' 
  },
  config: {
    reduxLog: true,
    disableAuth: false
    // candidate logCategories: 'core,connect,redux,path,mpath,action,perm,xhr'
  },
  modules: {
    '@folio/trivial': {},
    '@folio/items': {},
    '@folio/scan': {},
    '@folio/users': {}
  }
};
