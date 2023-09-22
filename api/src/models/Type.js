const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Type', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    created: { //flag para saber que lo cree
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  },
  {
    timestamps: false
  });
};