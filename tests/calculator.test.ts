import { describe, expect, it } from "vitest";
import { add } from "../src/calculator";

describe("add", () => {
  it("adds two positive numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("adds negative and positive numbers", () => {
    expect(add(-1, 1)).toBe(0);
  });
});
