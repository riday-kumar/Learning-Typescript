const arrayOfNum: number[] = [1, 4, 6];

const arrayOfStr: string[] = ["1", "4", "6"];

const arrayOfStrUsingMap: string[] = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStrUsingMap);

type TAreaOfNum = {
  height: number;
  width: number;
};

// type Theight = TAreaOfNum['height']

type TArea<T> = {
  [key in keyof T]: T[key];
};

const area1: TArea<{ height: string; width: string }> = {
  height: "50",
  width: "40",
};

// type TAreaOfString = {
//     height : string;
//     width : string
// }
