function getOrchestrationDocument() {
  return require(process.cwd() + '/orchestration.json');
}

function getPackageDocument() {
  return require(process.cwd() + '/package.json');
}

function getClusterDocument() {
  // INFO: This configuration will eventually support being stored
  // in an online datastore such as S3.
  return require(process.cwd() + '/cluster.json');
}

function getConfiguration() {
  return {
    orchestration: getOrchestrationDocument(),
    package: getPackageDocument(),
    cluster: getClusterDocument(),
  };
}

module.exports = {
  getConfiguration: getConfiguration
}
