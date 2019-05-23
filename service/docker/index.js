const si = require('systeminformation');

async function stats () {
  let detail;
  let stats;
  ([ detail, stats ] = await Promise.all([ si.dockerContainers(false), si.dockerContainerStats('*') ]));

  const simpleStats = detail.map(_ => {
    const { id, name, image, command, state } = _;
    const { mem_usage, cpu_percent } = stats.filter(_ => _.id === id)[0];
    
    return { id, name, image, command, state, stats: { cpu: cpu_percent, mem: mem_usage } };
  });

  return simpleStats;
} 

module.exports = {
  stats
};
