const express = require("express");
const bodyParser = require("body-parser");
const cron = require("node-cron");

const { PORT } = require("./config/server-config");
const { sendBasicEmail } = require("./servieces/email-serviece");

const setupAndStartServer = () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));



    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);

        /* sendBasicEmail(
            "support@admin.com",
            "jsdeveloperfullstack@gmail.com",
            "tesing email",
            "Hey..., how are you."
        ); */

        /* cron.schedule('* * * * *', () => {
            console.log('running a task every minute');
        }); */
    })
}

setupAndStartServer();