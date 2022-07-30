# omit-typescript

full type inference

## Usage

```ts
const a = { a: 1, b: 2, c: 3 };
const res = omit(a, ["a"]); // {b: 2,c: 3}
```
