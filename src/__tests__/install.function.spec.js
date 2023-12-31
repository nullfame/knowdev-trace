// Framework
// eslint-disable-next-line no-unused-vars
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Subject
import install from "../install.function.js";

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

describe("Install Function", () => {
  it("Works", () => {
    const response = install();
    expect(install).toBeFunction();
    expect(response).not.toBeUndefined();
    expect(response).toBeBoolean();
  });
});
