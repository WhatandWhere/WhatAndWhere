const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const UserInfo = sequelize.define('userInfo', {
    username: {type: DataTypes.STRING, primaryKey: true},
    password: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phoneNumber: {type: DataTypes.STRING},
    isAdult: {type: DataTypes.BOOLEAN},
    isManager: {type: DataTypes.BOOLEAN},
    isAdmin: {type: DataTypes.BOOLEAN}
})

const EventDetails = sequelize.define('eventDetails', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    eventName: {type: DataTypes.STRING},
    eventDescription: {type: DataTypes.STRING},
    eventImages: {type: DataTypes.JSON},
    eventDate: {type: DataTypes.DATE},
    eventTime: {type: DataTypes.TIME},
    eventFee: {type: DataTypes.INTEGER},
    eventCategory: {type: DataTypes.STRING},
    eventPlaceType: {type: DataTypes.STRING},
    eventManagerName: {type: DataTypes.STRING},
    eventLocation: {type: DataTypes.STRING},
    eventParticipants: {type: DataTypes.INTEGER},
    eventAttendeeCount: {type: DataTypes.INTEGER}
})

const ManagerDetails = sequelize.define('managerDetails', {
    eventManagerID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    managerUsername: {type: DataTypes.STRING}
});


const EventComments = sequelize.define('eventComments', {
    EventCommentID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment: {type: DataTypes.STRING},
    rating: {type: DataTypes.INTEGER}
});

UserInfo.belongsToMany(EventDetails, {through: EventComments})
EventDetails.belongsToMany(UserInfo, {through: EventComments})

UserInfo.hasMany(ManagerDetails)
ManagerDetails.belongsTo(UserInfo)

ManagerDetails.hasMany(EventDetails)
EventDetails.belongsTo(ManagerDetails)


module.exports = {
    UserInfo,
    EventDetails,
    ManagerDetails,
    EventComments
}
