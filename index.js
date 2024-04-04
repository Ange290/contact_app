const dotenv =require('dotenv');
 dotenv.config();
const swaggerUi =require("swagger-ui-express");
const swagger =require('./docs/swagger.json');
const express =require('express');
const app = express();
const configuration =require('./configs/index.js');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/contact.routes.js');
const errorhandling =require('./errorhandling/handleAllErrors.js');


app.use(express.json());
app.use(router);
//app.use(errorhandling.notFound);
//app.use(errorhandling.server);
app.use(errorhandling.otherError);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger))
mongoose.connect(configuration.mongoURI)
.then(() => {
    app.listen(configuration.port, ()=> {
        console.log("Server is listening on port "+configuration.port);
    });
})
.catch(err => {
    console.log(err);
});