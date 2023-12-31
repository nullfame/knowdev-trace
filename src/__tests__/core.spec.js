// Framework
// eslint-disable-next-line no-unused-vars
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Subject
import {
  DEFAULT,
  getApp,
  getCookieOptions,
  getOptions,
  setApp,
  setOptions,
} from "../core.js";

//
//
// Mock constants
//

//
//
// Mock modules
//

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

describe("Core", () => {
  it("Works", () => {
    expect(DEFAULT).toBeObject();
    expect(getApp).toBeFunction();
    expect(getOptions).toBeFunction();
    expect(setApp).toBeFunction();
    expect(setOptions).toBeFunction();
  });
  it("App starts null but updates with setApp", () => {
    expect(getApp()).toBeNull();
    const newApp = {};
    setApp(newApp);
    expect(getApp()).toBe(newApp); // It is literally the reference to the same object
    expect(getApp()).not.toBe({}); // It is not an identical object with a different reference
  });
  it("Options starts with default values", () => {
    const options = getOptions();
    expect(options).not.toBeUndefined();
    expect(options).toBeObject();
    expect(options.cookieName).toBe(DEFAULT.COOKIE_NAME);
  });
  it("Options updates with setOptions", () => {
    const options = getOptions();
    expect(options).not.toBeUndefined();
    expect(options).toBeObject();
    expect(options.cookieName).toBe(DEFAULT.COOKIE_NAME);
    const newOptions = {
      cookieName: "new-cookie-name",
    };
    setOptions(newOptions);
    expect(getOptions()).not.toBe(DEFAULT);
    expect(getOptions()).toBeObject();
    expect(getOptions().cookieName).toBe(newOptions.cookieName);
  });
  it("Set options does not error if no options are passed", () => {
    const result = setOptions();
    expect(result).toBeBoolean();
  });
  it("getCookieOptions returns an object", () => {
    const result = getOptions();
    expect(result).not.toBeUndefined();
    expect(result).toBeObject();
  });
  it("getCookieOptions only returns cookie options", () => {
    const allOptions = {
      cookieName: "MOCK_COOKIE_NAME",
      domain: "MOCK_DOMAIN",
      expires: "MOCK_EXPIRES",
      path: "MOCK_PATH",
      sameSite: "MOCK_SAME_SITE",
    };
    setOptions(allOptions);
    expect(getOptions()).toEqual(allOptions);
    expect(getCookieOptions()).not.toEqual(allOptions);
    expect(getCookieOptions()).toEqual({
      domain: "MOCK_DOMAIN",
      expires: "MOCK_EXPIRES",
      path: "MOCK_PATH",
      sameSite: "MOCK_SAME_SITE",
    });
  });
});
