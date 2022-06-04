const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');

const authRoute = require('./Routes/auth');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to MongoDB");
});

//Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api", authRoute);


app.listen(8800, () => {
    console.log('Server is Listening on port: 8800');
})