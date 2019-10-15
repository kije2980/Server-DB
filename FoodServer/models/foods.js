module.exports = (sequelize, DataTypes) => {
    return sequelize.define('food', {
        fid:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        fname:{
            type:DataTypes.STRING(20),
            allowNull:false,
            unique:true,
        }
    },{
        timestamps:false,
    });
  }
  