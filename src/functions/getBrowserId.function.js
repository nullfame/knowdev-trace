import { VueCookieNext } from "vue-cookie-next";
import { getOptions, init } from "../core.js";

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
  const { cookieName } = getOptions();
  const browserId = VueCookieNext.getCookie(cookieName);
  if (browserId) return browserId;
  return init();
};

//
//
// Export
//

export default getBrowserId;
