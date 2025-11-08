//? An Interface is a way to define the structure of an object, function etc.

interface Info {
  name: string;
  age: number;
  college: string;
}

interface TeacherType extends Info {
  subject: string;
}

var studentObj: Info = {
  name: "anil",
  age: 22,
  college: "IET alwar",
};

var teacherObj: TeacherType = {
  name: "Sam",
  age: 21,
  college: "IET alwar",
  subject: "Maths",
};

var management: Info = {
  name: "Sam",
  age: 21,
  college: "IET alwar",
};
