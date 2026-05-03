// union --------------> |
type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

getDashboard("admin");

// intersection ------> &

type Employee = {
  id: number;
  name: string;
};

type Manager = {
  designation: string;
  temMember: number;
};

type EmployeeManager = Employee & Manager;

const worker: EmployeeManager = {
  id: 2278,
  name: "Dipto",
  designation: "Manager",
  temMember: 4,
};
