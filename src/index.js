const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/server-config");
const { sendBasicEmail } = require("./servieces/email-serviece");
const jobs = require("./utils/jobs");
const TicketController = require("./controllers/ticket-controller");

const setupAndStartServer = () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.post("/api/v1/tickets", TicketController.createTicket);

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
        jobs();
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