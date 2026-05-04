// keyof : type operator

type RichPeopleVehicle = {
  car: string;
  bike: string;
  bus: string;
};

type MyVehicle1 = "bike" | "car" | "bus";
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle: MyVehicle2 = "bike";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 21,
  name: "Hridoy",
  address: {
    city: "Dhaka",
  },
};

const myId = user["id"];
const myName = user["name"];
const myAddress = user["address"];
console.log({ myId, myName, myAddress });

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const result = getPropertyFromObj(user, "name");
console.log(result);

const product = {
  brand: "HP",
  model: "hp-204",
};

console.log(getPropertyFromObj(product, "brand"));
