const sdk = require('@mycure/sdk');
const core = sdk.core;

const config = {
  urls: { base: 'http://mcv4.herokuapp.com' }
};

core.initialize(config);
