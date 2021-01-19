const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

// MIDDLEWARES
app.use(morgan('combined'));
app.use(express.urlencoded({
        extended: true
    })
);
app.use(express.json());

// LISTENER
app.listen(3000, () => {
    console.log('---> SERVER RUNNING ON PORT ' + 3000);
    console.log('---> SERVER URL: http://localhost:3000');
});
