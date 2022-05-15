const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

app.get("/api/hello", (req,res)=>{
    res.json({msg: "Hello"}) 
})

class User{
    constructor(){
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneNumber();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName();
        this.id = faker.id();
    }
}

app.get("api/users/new", (req,res)=>{

    let newUser = new User();
    res.json(newUser)
})

class Company{
    constructor(){
        this.id = faker.id();
        this.name = faker.company.companyName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zip = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

app.get("api/companies/new", (req,res)=>{

    let newCompany = new Company();
    res.json(newCompany)
})

// app.get("api/company", (req,res)=>{

//     let newUser = new User();
//     let newCompany = new Company();
//     result = newUser + newCompany
//     res.json(result)
// })

app.listen(port, ()=>{console.log(`Listening on port ${port}`)});