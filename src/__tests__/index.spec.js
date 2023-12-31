// Framework
// eslint-disable-next-line no-unused-vars
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Subject
import trace from "../index.js";

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

describe("The module", () => {
  describe("Index", () => {
    it("Works", () => {
      expect(trace).not.toBeUndefined();
      expect(trace).toBeObject();
      expect(trace.install).toBeFunction();
    });
  });
});
