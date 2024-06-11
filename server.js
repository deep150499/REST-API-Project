const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotnev = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5002;

app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(errorHandler);

app.listen(port , () => {
    console.log(`Server running on the port : ${port}`)
})