const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Country', {
    Id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen_de_la_bandera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Subregion: {
      type: DataTypes.STRING,
    },
    Area: {
      type: DataTypes.FLOAT,
    },
    Poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, { timestamps: false });
};
