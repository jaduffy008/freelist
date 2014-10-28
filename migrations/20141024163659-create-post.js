"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING
      },
      image_url: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      UserId:{
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      WinnerId:{
        type: DataTypes.INTEGER
      },
      hasWon: {
        type: DataTypes.BOOLEAN,
        default: false
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Posts").done(done);
  }
};