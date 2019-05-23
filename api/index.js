const docker = require('../service/docker');

async function getDockerStats(req, res, next) {
  const dockerStats = await docker.stats();
  res.send(dockerStats);
  return next();
}

module.exports = (server) => {
  server.get('/api/dockerStats', getDockerStats);
  server.head('/api/dockerStats', getDockerStats);
};
