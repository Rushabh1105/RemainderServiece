const TicketServiece = require("../servieces/email-serviece");

const createTicket = async (req, res) => {
    try {
        const response = await TicketServiece.createTicket(req.body);
        //console.log(response);
        return res.status(201).json({
            success : true,
            message : "created a ticket",
            data : response,
            err : {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "not able to create a ticket",
            data : {},
            err : error,
        })
    }
}

module.exports = {
    createTicket,
}