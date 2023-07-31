const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const GET_CONTRIES_BY_NAME = async (req, res) => {
    try {
      const { name } = req.query;
  
      const countries = await Country.findAll({
        where: {
          Nombre: {
            [Op.iLike]: `%${name}%` // Busca coincidencias sin distinguir mayúsculas o minúsculas
          }
        },
        include: {
          model: Activity,
          attributes: ['ID', 'Nombre', 'Dificultad', 'Duracion', 'Temporada'],
        },
      });
  
      if (countries.length > 0) {
        return res.status(200).json(countries);
      } 
      else {
        return res.status(404).json({ message: 'No se encontraron países con el nombre especificado.' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  };

  module.exports = GET_CONTRIES_BY_NAME