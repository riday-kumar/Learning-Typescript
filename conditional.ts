// conditional type : j type condition er upor depend kore.

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type TRichPeopleVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type TCheckVehicle<T> = T extends keyof TRichPeopleVehicle ? true : false;

type HasBike = TCheckVehicle<"Ship">;
