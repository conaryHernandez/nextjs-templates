const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = () => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'nextjs',
        mongodb_password: 'nextjs',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'nextjs',
      mongodb_password: 'nextjs',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
