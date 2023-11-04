const ApiError = require('../error/ApiError');
const { EventDetails, UserEvents, UserInfo, Category} = require('../models/models');
const {Op} = require("sequelize");
const moment = require('moment-timezone');
class EventController {
    // List all events
    buildWhereClause = (filters) => {
        const { startDate, endDate, minFee, maxFee, minAttendeeCount, maxAttendeeCount } = filters;
        const whereClause = {};

        const DB_TIMEZONE = 'Europe/Berlin'; //set the timezone to match your database's timezone
        // Add date range to where clause
        if (startDate || endDate) {
            whereClause.eventDate = {};
            if (startDate) {
                whereClause.eventDate[Op.gte] = moment.tz(startDate, DB_TIMEZONE).format('YYYY-MM-DD HH:mm:ssZ');
            }
            if (endDate) {
                whereClause.eventDate[Op.lte] = moment.tz(endDate, DB_TIMEZONE).endOf('day').format('YYYY-MM-DD HH:mm:ssZ');
            }
        }

        if (minFee !== undefined || maxFee !== undefined) {
            whereClause.eventFee = {};
            if (minFee !== undefined) whereClause.eventFee[Op.gte] = +minFee;
            if (maxFee !== undefined) whereClause.eventFee[Op.lte] = +maxFee;
        }

        if (minAttendeeCount || maxAttendeeCount) {
            whereClause.eventAttendeeCount = {};
            if (minAttendeeCount) whereClause.eventAttendeeCount[Op.gte] = +minAttendeeCount;
            if (maxAttendeeCount) whereClause.eventAttendeeCount[Op.lte] = +maxAttendeeCount;
        }

        return whereClause;
    }

    filterEvents = async (req, res, next) => {
        try {
            const filters = req.body;
            const whereClause = this.buildWhereClause(filters);

            const findOptions = {
                where: whereClause,
                ...(filters.categoryId && {
                    include: [{
                        model: Category,
                        where: { categoryId: filters.categoryId },
                    }]
                })
            };

            const events = await EventDetails.findAll(findOptions);
            return res.json(events);
        } catch (error) {
            console.error('Sequelize error:', error);
            next(ApiError.internal(`An error occurred while retrieving filtered events: ${error.message}`));
        }
    }


    // Create a new event
    async createEvent(req, res, next) {
        try {
            const {
                eventName, eventDate, eventTime, eventFee, eventPlaceType,
                eventManagerName, eventLocation, eventParticipants, eventAttendeeCount,
                eventImages, eventDescription, territoryId
            } = req.body;

            const event = await EventDetails.create({
                eventName, eventDate, eventTime, eventFee, eventPlaceType,
                eventManagerName, eventLocation, eventParticipants, eventAttendeeCount,
                eventImages, eventDescription, territoryId
            });
            return res.status(201).json(event);
        } catch (error) {
            next(ApiError.internal('An error occurred while creating the event'));
        }
    }

    // Get a specific event details
    async getEvent(req, res, next) {
        try {
            const { eventId } = req.params;
            const event = await EventDetails.findByPk(eventId);
            if (!event) {
                return next(ApiError.internal('Event not found'));
            }
            return res.json(event);
        } catch (error) {
            next(ApiError.internal('An error occurred while retrieving the event'));
        }
    }

    // Update a specific event
    async updateEvent(req, res, next) {
        try {
            const { eventId } = req.params;
            const updatedData = req.body;

            const [updated] = await EventDetails.update(updatedData, {
                where: { eventId: eventId }
            });
            if (updated) {
                const updatedEvent = await EventDetails.findByPk(eventId);
                return res.status(200).json(updatedEvent);
            }
            throw new Error('Event not found');
        } catch (error) {
            next(ApiError.internal('Event not found'));
        }
    }

    // Delete a specific event
    async deleteEvent(req, res, next) {
        try {
            const { eventId } = req.params;
            const deleted = await EventDetails.destroy({
                where: { eventId: eventId }
            });
            if (deleted) {
                return res.status(200).json({ message: 'Event deleted' });
            }
            throw new Error('Event not found');
        } catch (error) {
            next(ApiError.internal('Event not found'));
        }
    }
}

module.exports = new EventController();
