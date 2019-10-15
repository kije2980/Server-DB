const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.passward, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./users')(sequelize, Sequelize);
db.food = require('./foods')(sequelize, Sequelize);
db.restaurant = require('./restaurants')(sequelize, Sequelize);
db.user_log = require('./user_logs')(sequelize, Sequelize);
db.user_bookmark = require('./user_bookmarks')(sequelize, Sequelize);
db.user_interest = require('./user_interest')(sequelize, Sequelize);
db.review = require('./reviews')(sequelize, Sequelize);

db.food.hasMany(db.restaurant, {foreignKey:'fid', sourceKey:'fid'});
db.restaurant.belongsTo(db.food,{foreignKey:'fid', targetKey:'fid'});

db.food.hasMany(db.user_log, {foreignKey:'fid', sourceKey:'fid'});
db.user_log.belongsTo(db.food, {foreignKey:'fid', targetKey:'fid'});
db.user.hasMany(db.user_log, {foreignKey:'uid', sourceKey:'uid'});
db.user_log.belongsTo(db.user, {foreignKey:'uid', targetKey:'uid'});

db.user.hasMany(db.user_interest,{foreignKey:'uid', sourceKey:'uid'});
db.user_interest.belongsTo(db.user, {foreignKey:'uid', targetKey:'uid'});
db.food.hasMany(db.user_interest,{foreignKey:'fid', sourceKey:'fid'});
db.user_interest.belongsTo(db.food, {foreignKey:'fid', targetKey:'fid'});

db.user.hasMany(db.user_bookmark,{foreignKey:'uid', sourceKey:'uid'});
db.user_bookmark.belongsTo(db.user, {foreignKey:'uid', targetKey:'uid'});
db.restaurant.hasMany(db.user_bookmark, {foreignKey:'rid', sourceKey:'rid'});
db.user_bookmark.belongsTo(db.restaurant, {foreignKey:'rid', targetKey:'rid'});

db.restaurant.hasMany(db.review, {foreignKey:'rid', sourceKey:'rid'});
db.review.belongsTo(db.restaurant,{foreignKey:'rid', targetKey:'rid'});
db.user.hasMany(db.review,{foreignKey:'uid', sourceKey:'uid'});
db.review.belongsTo(db.user,{foreignKey:'uid', targetKey:'uid'});











/*db.user = require('./users')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

db.user.hasMany(db.Comment, {foreignKey:'commenter', sourceKey:'id'});
db.Comment.belongsTo(db.user,{foreignKey:'commenter', targetKey:'id'});*/

module.exports = db;