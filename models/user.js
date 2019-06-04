'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    ClassId :DataTypes.INTEGER
  });

  User.associate = function(models) {
    models.User.hasMany(models.Task);  // hasMany: 1 User có nhiều Task
    models.User.belongsTo(models.Class, {   //belongsTo : 1 User thuộc một Class
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: true
      }
    });
  };
  return User;
};
