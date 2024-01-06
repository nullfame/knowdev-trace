//
//
// Constants
//

export const DEFAULT = {
  COOKIE_NAME: "_kds-tr",
};

//
//
// Variables
//

const coreOptions = {
  // KnowDev Trace options
  cookieName: DEFAULT.COOKIE_NAME,

  // VueCookies options
  domain: undefined, // ""
  expire: undefined, // "1d"
  path: undefined, // "/"
  sameSite: undefined, // ""
  secure: undefined, // ""
};

let vueApp = null;

//
//
// Exported Functions
//

export const getApp = () => vueApp;

export const getCookieOptions = () => {
  const options = {};

  if (coreOptions.domain) options.domain = coreOptions.domain;
  if (coreOptions.expire) options.expire = coreOptions.expires;
  if (coreOptions.path) options.path = coreOptions.path;
  if (coreOptions.sameSite) options.sameSite = coreOptions.sameSite;
  if (coreOptions.secure) options.secure = coreOptions.secure;

  return options;
};

export const getOptions = () => coreOptions;

export const setApp = (app) => {
  vueApp = app;
  return true;
};

export const setOptions = (options) => {
  if (!options) return false;
  if (typeof options !== "object") return false;

  Object.keys(options).forEach((key) => {
    coreOptions[key] = options[key];
  });
  return true;
};
