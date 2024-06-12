const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotnev = require('dotenv').config();

connectDb();

const app = express();

const port = process.env.PORT || 5002;

app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(port , () => {
    console.log(`Server running on the port : ${port}`)
})