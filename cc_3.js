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
//Add new customer
customers.push({
    fullName: "Rolando Artiga",
    email: "theartigasrule@gmail.com",
    purchases: ["Gloves","Shovel","Plastic bags"]
});

//Remove 1st coustomer
customers.shift()

//Updated email
customers[2].email = "r.artigas@yahoo.com";

//Add new purchase
customers[1].purchases.push("Candle set");

//Show all customers
console.log("updated Customer list:", customers);

//Loop
customers.forEach((customer) => {
    console.log(
        `Full name: ${customer.fullName} , Email: ${customer.email} , Total purchases: ${customer.purchases.length}`
    );
});