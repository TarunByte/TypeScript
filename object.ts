// var userData: {
//   name: string;
//   age: number;
//   company: string;
// } = {
//   name: "Anil siddhu",
//   age: 20,
//   company: "Oracle",
// };
// userData.name = "Sam";

// console.log(userData);

// var userData: {
//   [key: string]: string | number | undefined;
// } = {
//   name: "Anil siddhu",
//   age: 20,
//   company: undefined,
// };
// userData.company = "HCL";
// userData.city = "Noida";
// console.log(userData);

var userData: {
  name: string;
  age: number;
  company: string;
  address: {
    houseNo: string;
    sector: string;
    city: string;
  };
} = {
  name: "Anil siddhu",
  age: 20,
  company: "Oracle",
  address: {
    houseNo: "house no 60",
    sector: "70",
    city: "gurgaon",
  },
};
