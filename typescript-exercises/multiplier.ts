// const multiplicator = (a: number, b: number, printText: string) => {
//   console.log(printText, a * b);
// };

// multiplicator(
//   "how about a string?",
//   4,
//   "Multiplied numbers 2 and 4, the result is:"
// );

type Operation = "multiply" | "add" | "divide";

const calculator = (a: number, b: number, op: Operation): number | string => {
  if (op === "multiply") {
    return a * b;
  } else if (op === "add") {
    return a + b;
  } else if (op === "divide") {
    if (b === 0) return "this cannot be done";
    return a / b;
  }
};

calculator(1, 2, "divide");
