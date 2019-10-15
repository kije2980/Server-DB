module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_bookmark', {
      rid:{
        type:DataTypes.STRING(50),
        primaryKey:true,
      },
      uid:{
        type:DataTypes.INTEGER,
        primaryKey:true,
      },
    },{
      timestamps:false,
  });
  }
  