'use strict';

const express = require('express');
const sample = require("./api-controller/sample");
const uploadImage = require("./api-controller/upload-image");
const getImage = require("./api-controller/get-image");
const login = require("./api-controller/login");
const cors = require('cors');
const bodyParser = require('body-parser');
const getImagesList = require('./api-controller/get-images-list');
// const checkAuth = require("./middleware/check-auth");

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(bodyParser.json());app.use(bodyParser.urlencoded({extended: false}))
// app.use(checkAuth);
sample(app);
uploadImage(app);
getImagesList(app);
getImage(app);
login(app);
app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});