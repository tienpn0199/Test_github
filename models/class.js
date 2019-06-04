'use strict';
module.exports = (sequelize, DataTypes) => {
    var Class = sequelize.define('Class', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        ten: DataTypes.STRING,
        id_user: DataTypes.INTEGER
    });

    Class.associate = function (models) {
        models.Class.hasMany(models.User);
    };
    return Class;
};