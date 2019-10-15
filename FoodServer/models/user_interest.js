module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_interest', {
        uid:{
            type:DataTypes.INTEGER,
            primaryKey:true,
        },
        fid:{
            type:DataTypes.INTEGER,
            primaryKey:true,
        },
        score:{
            type:DataTypes.INTEGER,
            allowNull:true,
        }
    },{
        timestamps:false,
    });
  }
  