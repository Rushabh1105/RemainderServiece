const cron = require("node-cron");

const emailServiece = require("../servieces/email-serviece");
const sender = require("../config/email-config");

const setupJobs = () => {
    cron.schedule("*/2 * * * *",async () => {
        const response = await emailServiece.fetchPendingEmails();
        response.forEach((email) => {
            sender.sendMail({
                from : "RemainderServiece@airline.com",
                to : email.recipientEmail,
                subject : email.subjet,
                text : email.content,
            }, async (err, data) => {
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                    await emailServiece.updateTicket(email.id, {status : "SUCCESS"});
                }
            })
            /* emailServiece.sendBasicEmail(
                "RemainderServiece@airline.com",
                email.recipientEmail,
                email.subjet,
                email.content,
            ) */
        });
        
    })
}

module.exports = setupJobs;