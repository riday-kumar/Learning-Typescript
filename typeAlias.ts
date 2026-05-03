type UserType = {
  name: {
    firstName: string;
    lastName: string;
  };
  roll: number;
  sec: string;
  address: {
    city: string;
    division: string;
  };
};

const user: UserType = {
  name: {
    firstName: "Hridoy",
    lastName: "Saha",
  },
  roll: 12,
  sec: "A",
  address: {
    city: "Dhaka",
    division: "Dhaka",
  },
};

const newUser: UserType = {
  name: {
    firstName: "Ripon",
    lastName: "Saha",
  },
  roll: 7,
  sec: "A",
  address: {
    city: "Nganj",
    division: "Dhaka",
  },
};

console.log(user, newUser);

type UserName = string;
const myName: UserName = "MR. X";

type IsAdminType = true;
const isAdmin: IsAdminType = true;

// function
type AddFunc = (num1: number, num2: number) => number;
const add: AddFunc = (num1, num2) => num1 + num2;
