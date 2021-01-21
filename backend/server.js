const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors.js');
const BookRouter = require('./routes/BookRouter.js');
const ContactRouter = require('./routes/ContactRouter.js');
const CourseRouter = require('./routes/CourseRouter.js');
const DegreeRouter = require('./routes/DegreeRouter.js');
const JobRouter = require('./routes/JobRouter.js');
const LanguageRouter = require('./routes/LanguageRouter.js');
const ProjectRouter = require('./routes/ProjectRouter.js');
const TestimonialRouter = require('./routes/TestimonialRouter.js');

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
app.use('/book', BookRouter);
app.use('/contact', ContactRouter);
app.use('/course', CourseRouter);
app.use('/degree', DegreeRouter);
app.use('/job', JobRouter);
app.use('/language', LanguageRouter);
app.use('/project', ProjectRouter);
app.use('/testimonial', TestimonialRouter);

// LISTENER
app.listen(PORT, () => {
    console.log('---> SERVER RUNNING ON PORT ' + PORT);
    console.log('---> SERVER URL: http://localhost:3000');
});
