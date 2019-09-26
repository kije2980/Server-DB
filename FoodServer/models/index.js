const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.passward, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./users')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

db.user.hasMany(db.Comment, {foreignKey:'commenter', sourceKey:'id'});
db.Comment.belongsTo(db.user,{foreignKey:'commenter', targetKey:'id'});

module.exports = db;