const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const UserInfo = sequelize.define('userInfo', {
    userInfoId: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true, allowNull: true },
    name: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    phoneNumber: { type: DataTypes.STRING },
    birthDate: { type: DataTypes.DATE },
    password: { type: DataTypes.STRING },
    isAdmin: { type: DataTypes.BOOLEAN },
    isManager: { type: DataTypes.BOOLEAN }
});

const EventDetails = sequelize.define('eventDetails', {
    eventId: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    eventName: { type: DataTypes.STRING },
    eventDate: { type: DataTypes.DATE },
    eventTime: { type: DataTypes.TIME },
    eventFee: { type: DataTypes.INTEGER },
    eventPlaceType: { type: DataTypes.STRING },
    eventManagerName: { type: DataTypes.STRING },
    eventLocation: { type: DataTypes.STRING },
    eventParticipants: { type: DataTypes.STRING },  // Assuming VARCHAR type for participants
    eventAttendeeCount: { type: DataTypes.INTEGER },
    eventImages: { type: DataTypes.JSON },
    eventDescription: { type: DataTypes.STRING },
    territoryId: { type: DataTypes.BIGINT }
});

const Territory = sequelize.define('territory', {
    territoryId: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING }
});

const UserEvents = sequelize.define('userEvents', {
    userEventsId: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    eventId: { type: DataTypes.BIGINT },
    userInfoId: { type: DataTypes.BIGINT }
});

const Category = sequelize.define('category', {
    categoryId: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    categoryName: { type: DataTypes.STRING }
});

const SubCategory = sequelize.define('subCategory', {
    subCategoryId: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    subcategoryName: { type: DataTypes.STRING }
});

const EventComments = sequelize.define('eventComments', {
    eventCommentsId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },  // Changed EventCommentID to id
    comment: { type: DataTypes.STRING },
    rating: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.TIME }
});

UserInfo.hasMany(Territory);
Territory.belongsTo(UserInfo);

UserInfo.belongsToMany(EventDetails, { through: UserEvents });
EventDetails.belongsToMany(UserInfo, { through: UserEvents });

EventDetails.hasMany(EventComments);
EventComments.belongsTo(EventDetails);

UserInfo.hasMany(EventComments);
EventComments.belongsTo(UserInfo);

EventDetails.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(EventDetails, { foreignKey: 'categoryId' });

Category.hasMany(SubCategory);
SubCategory.belongsTo(Category);

module.exports = {
    UserInfo,
    EventDetails,
    Territory,
    UserEvents,
    Category,
    SubCategory,
    EventComments
};
