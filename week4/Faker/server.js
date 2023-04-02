const express = require('express');
const app = express();
const port = 8000; 

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const createUser = () => {
return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number,
    email: faker.internet.email(),
    password: faker.internet.password(),
    id:faker.random.numeric()
}}

const createCompany = () => ({
id: faker.random.numeric(),
name: faker.company.companyName(),
street: faker.address.streetAddress(),
city: faker.address.cityName(),
state: faker.address.state(),
zipcode: faker.address.zipcode(),
country: faker.address.country(),

})

app.get("/api/company/new", (req, res) => {
    const createCompany = createUser();
    res.json(newCompany);
  });



app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser)
})


app.listen(port, () => console.log(`listening on port: ${port}`));

