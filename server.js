const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const nodejsData = require("./data/nodejs.json");

 app.use(express.json());

app.post("/rke143", (request, response) => {
    console.log(request.body);

    if (request.body.username !== "rke" || request.body.password !== "143") {
        response.status(200).json({message: "invalid credentials"});
    } else {
        response.status(200).json({nodejsData});
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");

});