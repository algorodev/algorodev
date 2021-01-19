const express = require('express');
const morgan = require('morgan');

const cors = require('./middlewares/cors.js');

const ProjectRouter = require('./routes/ProjectRouter.js');

require('dotenv').config();
const app = express();

const PORT = process.env.PORT;

// MIDDLEWARES
app.use(morgan('combined'));
app.use(express.urlencoded({
        extended: true
    })
);
app.use(express.json());
app.use(cors);

// ENDPOINTS
app.use('/project', ProjectRouter);

// LISTENER
app.listen(PORT, () => {
    console.log('---> SERVER RUNNING ON PORT ' + PORT);
    console.log('---> SERVER URL: http://localhost:3000');
});
