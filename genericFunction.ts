// const createArrayWithString = (value : string)=>  [value];

// const createArrayWithNumber = (value : number) => [value];

// const createArrayWithObj = (value : {
//     id : number; name : string
// }) => {
//     return [value]
// };

const createArrayWithGeneric = <T>(value: T) => [value];

const arrString = createArrayWithGeneric("Apple");
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
  id: 1,
  name: "hridoy",
});

// tupol
const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1Tuple = createArrayTupleWithGeneric(33, "Hriody");
console.log(res1Tuple);

const res2Obj = createArrayTupleWithGeneric(
  { id: 12, name: "Dhoni" },
  { id: 7, name: "Sparsha" },
);
console.log(res2Obj);

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Level 2",
    ...studentInfo,
  };
};

const student1 = {
  id: 1,
  name: "Hridoy Saha",
  sclCompleted: true,
};

const student2 = {
  id: 2,
  name: "Sparsha",
  sclCompleted: false,
  isMarried: true,
};

const result = addStudentToCourse(student1);
console.log(result);
