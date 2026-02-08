let customers = [
   {
    full_name: "Alejandro Heredia",
    email: "course1@gmail.com",
    purchases:["Jacket", "TV","Headphones"]
   },
   {
    full_name: "Josh Simmons",
    email:"drakeandjosh@gmail.com",
    purchases: ["Guitar","Drums","Piano"]
   },
   {
    full_name:"Dante Black",
    email: "newhistory@gmail.com",
    purchases:["Toy car","Book The name of god","Red Paint"]
   }
];
console.log("Original customer list:", customers);

customers.push({
    full_name: "Rolando Artiga",
    email: "theartigasrule@gmail.com",
    purchases: ["Gloves","Shovel","Plastic bags"]
});
console.log("New Customer Added:", customers);