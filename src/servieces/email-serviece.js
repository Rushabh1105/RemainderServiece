const sender = require("../config/email-config");
const TicketRepository = require("../repository/ticket-repository");

const repo = new TicketRepository;

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

const fetchPendingEmails = async (timestamp) => {
    try {
        //const repo = new TicketRepository;
        const response = await repo.getTicket({status : "PENDING"});
        return response;
    } catch (error) {
        console.log(error);
        throw {error};
    }
}

const createTicket = async (data) => {
    try {
        const response = await repo.createTicket(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const updateTicket = async (ticketId, data) => {
    try {
        const response = await repo.updateTicket(ticketId, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createTicket,
    updateTicket,
}