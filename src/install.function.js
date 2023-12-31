import { setApp, setOptions } from "./core.js";

//
//
// Main
//

// eslint-disable-next-line arrow-body-style
const install = (app, options) => {
  return setApp(app) && setOptions(options);
};

//
//
// Export
//

export default install;
