let anything: any;

anything = "Riday saha";

const name = (anything as string).split(" ")[0];
console.log(name);

const kgToGMConverter = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "string") {
    const [value] = input.split(" ");
    let GMs = Number(value) * 1000;
    return GMs;
  } else if (typeof input === "number") {
    let GMn = input * 1000;
    return GMn;
  }
};

const result1 = kgToGMConverter(5) as number;
const result2 = kgToGMConverter("5 kg") as string;
console.log(result1);
console.log(result2);

type CustomError = {
  message: string;
};

try {
  //
} catch (err) {
  console.log((err as CustomError).message);
}
