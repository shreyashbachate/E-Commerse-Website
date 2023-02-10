const express = require("express");

const app = express();

const port = 8000

app.get("/", (req, res) => {
    return res.send("Home Page");
});

app.get("/name", (req, res) => {
    return res.send("Name");
})

app.get("/signout", (req, res) => {
    return res.send("You are sign out");
})

app.get("/login", (req, res) => {
    return res.send("Login Page");
})

app.listen(port, () => {
    console.log("Server is up and running");
})

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })