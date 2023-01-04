const { NotificationTicket } = require("../models/index");

const { Op } = require("sequelize");

class TicketRepository{
    
    async getAllTickets(){
        try {
            const tickets = await NotificationTicket.findAll();
            return tickets;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

    async createTicket(data){
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

    async getTicket(filter){
        try {
            const tickets = await NotificationTicket.findAll({
                where : {
                    status : filter.status,
                    notificationTime : {
                        [Op.lte] : new Date,
                    },
                }
            });
            //console.log(tickets);
            return tickets;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

    async updateTicket(ticketId, data){
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            ticket.status = data.status;
            await ticket.save();
            return ticket;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }
}

module.exports = TicketRepository;