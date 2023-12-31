import VueCookies from "vue-cookies";
import { getCookieOptions, setApp, setOptions } from "./core.js";

//
//
// Main
//

// eslint-disable-next-line arrow-body-style
const install = (app, options) => {
  const result = {
    installVueCookies: false,
    setApp: false,
    setOptions: false,
  };

  // Call core functions first
  result.setApp = setApp(app);
  result.setOptions = setOptions(options);

  // Install VueCookies
  try {
    VueCookies.install(app, getCookieOptions());
    result.installVueCookies = true;
  } catch (error) {
    result.installVueCookies = false;
  }

  return result.installVueCookies && result.setApp && result.setOptions;
};

//
//
// Export
//

export default install;
