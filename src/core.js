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
  cookieName: DEFAULT.COOKIE_NAME,
};

let vueApp = null;

//
//
// Exported Functions
//

export const getApp = () => vueApp;
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
