// dynamically generalize

type GenericArray<T> = Array<T>;

// const friends : string[] = ['MR. X', 'MR. Y', 'MR. Z'];
const friends: GenericArray<string> = ["MR. X", "MR. Y", "MR. Z"];

// const rollNumbers : number[] = [4,3,7];
const rollNumbers: GenericArray<number> = [4, 3, 7];

// const isEligibleList : boolean[] = [true, false, true]
const isEligibleList: GenericArray<boolean> = [true, false, true];

type Coordinates<X, Y> = [X, Y];
// type Coordinates = [string, number];
const coOrdinateOne: Coordinates<string, number> = ["20", 40];
const coOrdinateTwo: Coordinates<number, number> = [40, 50];

// how to use generic type in Array of Object
type User = {
  name: string;
  age: number;
  roll?: number;
  fevouriteColor?: string;
};
const userList: GenericArray<User> = [
  {
    name: "mr. X",
    age: 22,
  },
  {
    name: "mr.Y",
    age: 25,
    fevouriteColor: "red",
  },
];
