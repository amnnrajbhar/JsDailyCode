let users = {
    name: "Pratham"
};

let NewUsers = users;//shallow copy


NewUsers.name = "Aman";
// console.log("users " + users.name);
// console.log("newusers " + NewUsers.name);


let emp = {
    name: "Pratham"
};

let newEmp=JSON.parse(JSON.stringify(emp));
newEmp.name="Shubham";
// console.log(emp);
// console.log(newEmp);
let a;
console.log(a);