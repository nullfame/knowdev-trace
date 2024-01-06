// Framework
// eslint-disable-next-line no-unused-vars
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Subject
import getBrowserId from "../getBrowserId.function.js";

//
//
// Mock constants
//

//
//
// Mock modules
//

vi.mock("vue-cookie-next", () => ({
  VueCookieNext: {
    getCookie: vi.fn().mockReturnValue("MOCKED_COOKIE_VALUE"),
    setCookie: vi.fn(),
    removeCookie: vi.fn(),
  },
}));

//
//
// Mock environment
//

const DEFAULT_ENV = process.env;
beforeEach(() => {
  process.env = { ...process.env };
});
afterEach(() => {
  process.env = DEFAULT_ENV;
});

//
//
// Run tests
//

describe("GetBrowserId Function", () => {
  it("Works", () => {
    const response = getBrowserId();
    expect(response).toBeString();
  });
});
