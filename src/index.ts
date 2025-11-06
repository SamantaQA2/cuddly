// ❌ Unused imports 

// ❌ Prefer const / no var
// const x = 5;
// let y = 10;
// y = 20;

// ❌ Arrow body style
const add = (a: number, b: number) => a + b;

// ❌ Block scoped var
function foo(): void {
  if (true) {
    var z = 3;
  }
  console.log(z);
}

// ❌ Default param last
function greet(greeting = "Hi", name: string): string {
  return `${greeting}, ${name}`;
}

// ❌ Max params (5)
function maxParams(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
): number {
  return a + b + c + d + e;
}

// ❌ No else return
function check(num: number): string {
  if (num > 0) return "positive";
  return "non-positive";
}

// ❌ Empty block
if (false) {
}

// ❌ Extra semicolon
const a = 1;

// ❌ Floating decimal
const f = 0.5;

// ❌ Nested ternary
const val = x > 0 ? (y > 0 ? "both positive" : "x pos only") : "x non-positive";

// ❌ New object / new
const obj = new Object();
new Date();

// ❌ Param reassign
function change(n: number): number {
  n = n + 1;
  return n;
}

// ❌ Useless concat / return
const s = "Hello " + "World";
function useless(): void {}

// ❌ Template vs concat
const t = "Hello" + " " + "template";

// ❌ Yoda condition
if (x === 42) console.log("yoda");

// ❌ Console
console.log("Test");

// ❌ Eval / implied eval
eval("2 + 2");
setTimeout("console.log('hi')", 1000);

// ❌ Use before define
console.log(before);
const before = 123;

// ❌ Max classes per file
class A {}
class B {}

// 🧽 Unused vars
const unusedVar: number = 42;

// 🧠 TypeScript-ish patterns in JS
// (TS rules that can’t trigger in plain JS will be ignored, e.g., explicit types)

// ❌ Shadowing
const shadow = 1;
function shadowFunc(): void {
  const shadow = 2;
}

// ❌ Duplicate imports (use ESLint core to detect)

// ❌ Dynamic delete
const obj2 = { a: 1 };
delete obj2["a"];

// ❌ Function expressions
const arrowFunc = (x: number): number => x;

// ❌ Misc TS unsafe-ish patterns
let unsafe: any;
unsafe = "string";
unsafe = 42;

// ❌ Switch exhaustiveness
function switchTest(val: number): string {
  switch (val) {
    case 1:
      return "one";
    case 2:
      return "two";
    default:
      throw new Error("Invalid value");
  }
}
const sam = 5;
console.log(change(sam));

export { change, greet, maxParams, check, switchTest, foo };


