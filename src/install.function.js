import { VueCookieNext } from "vue-cookie-next";
import { getCookieOptions, init, setApp, setOptions } from "./core.js";

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

  // Install vue-cookie-next
  try {
    VueCookieNext.install(app);
    VueCookieNext.config(getCookieOptions());
    result.installVueCookies = true;
    init();
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
