import { v4 as uuidv4 } from "uuid";
import { getApp, getOptions } from "../core.js";

//
//
// Constants
//

//
//
// Helper Functions
//

//
//
// Main
//

const getBrowserId = () => {
  const app = getApp();
  if (!app) return false;
  const cookies = app.$cookies;
  if (!cookies) return false;

  const options = getOptions();
  const { cookieName } = options;

  if (cookies) {
    // See if a cookie is present
    const browserId = cookies.get(cookieName);
    if (browserId) return browserId;
    // If not, generate a new uuid
    const newBrowserId = uuidv4();
    // Save it as a cookie
    app.$cookies.set(cookieName, newBrowserId);
    return newBrowserId;
  }

  return false;
};

//
//
// Export
//

export default getBrowserId;
