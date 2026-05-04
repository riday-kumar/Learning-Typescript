type TProduct = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color?: string;
};

// manual
// type TProductSummary = {
//     id : number;
//     name : string;
//     price : string;
// }

type TProductSummary = Pick<TProduct, "id" | "name" | "price">;

// Omit -------> skip which is not needed
type TProductWithoutStock = Omit<TProduct, "stock" | "color">;

// Required --------> All property will be required.(if some property is optional , but it will also be required)
type TProductWithColor = Required<TProduct>;

const product: TProductWithColor = {
  id: 231,
  name: "Biscuit",
  price: 220,
  color: "red",
  stock: 220,
};

// partial -----> all will be optional
type OptionalProduct = Partial<TProduct>;

// ReadOnly
type readOnly = Readonly<TProduct>;

// Record -----> left side (key): string ; right side (value) : unknown
const emptyObj: Record<string, unknown> = {};

const product1 = {
  id: 22,
  name: "Mouse",
  price: 20,
};
