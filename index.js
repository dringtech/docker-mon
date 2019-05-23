const restify = require('restify');

const loadApi = require('./api/index');

const server = restify.createServer();
loadApi(server);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});