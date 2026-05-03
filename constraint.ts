// strict rules

type StudentInfo = {
  id: number;
  name: string;
  class: number;
  dob: string;
};

const addStudentToCourse = <T extends StudentInfo>(studentInfo: T) => {
  return {
    course: "Level 2",
    ...studentInfo,
  };
};

const student3 = {
  id: 223,
  name: "MSD",
  hasWatch: false,
  class: 12,
  dob: "12-2-2005",
};

console.log(addStudentToCourse(student3));
