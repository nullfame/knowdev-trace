import { v4 as uuidv4 } from "uuid";
import { VueCookieNext } from "vue-cookie-next";

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

  // vue-cookies-next options
  domain: undefined, // ""
  expire: "395d", // was: "1d"
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
  if (coreOptions.expire) options.expire = coreOptions.expire;
  if (coreOptions.path) options.path = coreOptions.path;
  if (coreOptions.sameSite) options.sameSite = coreOptions.sameSite;
  if (coreOptions.secure) options.secure = coreOptions.secure;

  return options;
};

export const getOptions = () => coreOptions;

export const init = () => {
  // Try/catch to prevent errors if VueCookieNext is not installed
  try {
    // See if a cookie is present
    const browserId = VueCookieNext.getCookie(coreOptions.cookieName);
    if (browserId) return browserId;

    // If not, generate a new uuid
    const newBrowserId = uuidv4();

    // Save it as a cookie
    VueCookieNext.setCookie(coreOptions.cookieName, newBrowserId);
    return newBrowserId;
  } catch (error) {
    return false;
  }
};

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
