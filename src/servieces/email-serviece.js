const sender = require("../config/email-config");

const sendBasicEmail = async (from, to, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from : from,
            to : to,
            subject : mailSubject,
            text : mailBody,
        });
        console.log(response);
        
    } catch (error) {
        console.log(error);
        throw {error};
    }
}

module.exports = {
    sendBasicEmail,
}