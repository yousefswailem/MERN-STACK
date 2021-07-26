const express = require("express");
const app = express();
const port = 2002;
var faker = require('faker');

class User {
	constructor(){

this.firstname=faker.name.firstName();
this.lastname=faker.name.lastName();
this.phonenumber=faker.phone.phoneNumber();
this.email=faker.internet.email();
this.password=faker.internet.password();
}
}

class Company {
	constructor(){

this.name=faker.company.companyName();
this.address={
"street":faker.address.streetName(),
"city":faker.address.city(),
"state":faker.address.state(),
"zipCode":faker.address.zipCode(),
"country":faker.address.country()
		}
	}
}

var user = new User();
var company = new Company();

app.get("/api/users/new", (req, res) => {
    res.json(user);
});

app.get('/api/companies/new', (req, res) => {
    res.json(company);
});


app.get('/api/users/companies', (req, res) => {
    res.json(userCompany);
});


var userCompany={
    "User" : new User(),
    "Company" : new Company()
}

app.listen( port, () => console.log(`Listening on port: ${port}`) );