const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors.js');
const ProjectRouter = require('./routes/ProjectRouter.js');
const ContactRouter = require('./routes/ContactRouter.js');

require('dotenv').config();
const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_CONNECTION;

mongoose.connect(MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    }
)
    .then(() => console.log('---> SUCCESSFUL DATABASE CONNECTION'))
    .catch(console.error);

// MIDDLEWARES
app.use(morgan('combined'));
app.use(express.urlencoded({
        extended: true
    })
);
app.use(express.json());
app.use(cors);

// ENDPOINTS
app.use('/contact', ContactRouter);
app.use('/project', ProjectRouter);

// LISTENER
app.listen(PORT, () => {
    console.log('---> SERVER RUNNING ON PORT ' + PORT);
    console.log('---> SERVER URL: http://localhost:3000');
});
