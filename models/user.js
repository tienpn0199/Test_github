'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING
  });

  User.associate = function(models) {
    models.User.hasMany(models.Task);  // hasMany: 1 User có nhiều Task
    models.User.belongsTo(models.Class, {   //belongsTo : 1 Task thuộc một User
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return User;
};
