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
// Main
//

export const setApp = (app) => {
  vueApp = app;
  return true;
};

export const setOptions = (options) => {
  Object.keys(options).forEach((key) => {
    coreOptions[key] = options[key];
  });
  return true;
};

//
//
// Export
//

export const getApp = () => vueApp;
export const getOptions = () => coreOptions;
