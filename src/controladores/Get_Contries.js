const { Country, Activity } = require('../db');

const GET_CONTRIES = async (req, res) => {
  try {
    const DB_DATA = await Country.findAll({
      include: {
        model: Activity,
        attributes: ['ID', 'Nombre', 'Dificultad', 'Duracion', 'Temporada'],
      },
    });
    return res.status(200).json(DB_DATA);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = GET_CONTRIES;
