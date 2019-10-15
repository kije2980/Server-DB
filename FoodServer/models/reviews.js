module.exports = (sequelize, DataTypes) => {
    return sequelize.define('review', {
        rid:{
            type:DataTypes.STRING(50),
            primaryKey:true,
        },
        uid:{
            type:DataTypes.INTEGER,
            primaryKey:true,
        },
        rating:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        coment:{
            type:DataTypes.STRING(100),
            allowNull:true,
        }
    },{
        timestamps:false,
    });
  }
  