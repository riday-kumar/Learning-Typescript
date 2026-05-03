type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

// intersection
type UserWithRole = User & Role;

const userOne: UserWithRole = {
  name: "RIday",
  age: 20,
  role: "admin",
};

const userTwo: User = {
  name: "Sparsha",
  age: 20,
};

type IsAdmin = boolean;
const isAdmin: IsAdmin = false;

// primitive type er khetre interface use korte parbo na

// interface works with the type of object: array, obj, function

// Interface
interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const userThree: IUserWithRole = {
  name: "Riday Kumar",
  age: 20,
  role: "admin",
};

// how to use interface with array

// type Friends = string [];

interface Friends {
  [index: number]: string;
}

const friends: Friends = ["A", "B", "C", "D"];

// how use interface with function

// type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => {
  return num1 + num2;
};

console.log(add(5, 4));
console.log(add(8, 8));
