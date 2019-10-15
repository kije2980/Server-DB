module.exports = (sequelize, DataTypes) => {
    return sequelize.define('restaurant', {
      rid:{
        type:DataTypes.STRING(50),
        primaryKey:true,
      },
      rs_name:{
        type:DataTypes.STRING(45),
        allowNull:false,
      },
    },{
      timestamps:false,
  });
  }