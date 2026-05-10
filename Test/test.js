// const obj = {
//   name: "Name is Hey",
//   user: function () {
//     console.log(this.name);
//   },
// };
// const user = obj.user.call(obj);

let obj = {
  name: "hey",
};

Object.defineProperty(obj, "name", { writable: false });
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
