module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
      uid:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      uname:{
        type:DataTypes.STRING(30),
        allowNull:false,
      },
      gender:{
        type:DataTypes.STRING(10),
        allowNull:false,
      },
      age:{
        type:DataTypes.INTEGER,
        allowNull:false,
      },
      job:{
        type:DataTypes.STRING(20),
        allowNull:false,
      }
    },{
      timestamps:false,
  });
  }
  