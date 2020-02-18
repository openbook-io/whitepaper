import variables from './variables';

const req = require.context('./components', false, /.ts$/);
let overrides = {};

req.keys().forEach(filename => {
  overrides = {
    ...overrides,
    ...req(filename).default(variables),
  };
});

export default {
  ...variables.theme,
  overrides,
};
