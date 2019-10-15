module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_log', {
        uid:{
            type:DataTypes.INTEGER,
            primaryKey:true,
        },
        fid:{
            type:DataTypes.INTEGER,
            primaryKey:true,
        },
        count:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        time:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        action:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        avg_time:{
            type:DataTypes.INTEGER,
            allowNull:true,
        }
    },{
        timestamps:false,
    });
  }
  