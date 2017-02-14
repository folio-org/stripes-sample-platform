module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: { reduxLog: true, disableAuth: true },
  modules: {
    '@folio/trivial': {},
    '@folio/users': {}
  }
};
