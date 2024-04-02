import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import configuration from './configs/index.js';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/contact.routes.js';
import errorhandling from './errorhandling/handleAllErrors.js';

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorhandling.notFound);
//app.use(errorhandling.server);
app.use(errorhandling.otherError);
mongoose.connect(configuration.mongoURI)
.then(() => {
    app.listen(configuration.port, ()=> {
        console.log("Server is listening on port "+configuration.port);
    });
})
.catch(err => {
    console.log(err);
});