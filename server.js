const express = require('express');
const dotnev = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5002;

app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));

app.listen(port , () => {
    console.log(`Server running on the port : ${port}`)
})