const express = require("express");
const {faker} = require('@faker-js/faker');
const app = express();
const port = 8000;

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}


class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}


app.get("/api/users/new", (req, res) => {
    let user = new User();
    res.json({ results: user });
});

app.get("/api/companies/new", (req, res) => {
    let company = new Company();
    res.json({ results: company });
});

app.get("/api/user/company", (req, res) => {
    let user = new User();
    let company = new Company();
    res.json({
        user: user,
        company: company,
    });
});

app.listen(port, () => console.log("This server is running"));