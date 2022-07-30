import { assert, _ } from "spec.ts";
import omit from "..";

describe("Omit", () => {
  it("should return new Object even if the object to be deleted is empty", () => {
    const a = { a: 1, b: 2, c: 3 };
    const res = omit(a, []);
    expect(res).toStrictEqual(a);
    expect(res === a).toBe(false);
  });

  it("should return rest prop when specified attribute", () => {
    const a = { a: 1, b: 2, c: 3 };
    const res = omit(a, ["a"]);
    expect(res).toStrictEqual({ b: 2, c: 3 });
  });

  it("can return correct type", () => {
    type Result = {
      b: number;
      c: number;
    };
    const a = { a: 1, b: 2, c: 3 };
    const res = omit(a, ["a"]);
    assert(res, _ as Result);
  });
});
