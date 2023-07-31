const { Activity, Country } = require('../db');
const { Op } = require('sequelize');


const POST_ACTIVITY = async(req, res) => {
  const { Nombre, Dificultad, Duracion, Temporada, Paises } = req.body;

  try {

    const duplicatedActivity = await Activity.findOne({
      where: { Nombre },
      include: { model: Country, where: { Nombre: Paises } }
    });

    if (duplicatedActivity) {
      return res.status(400).json({ message: "Ya existe" });
    }



    const nuevaActividad = await Activity.create({
      Nombre,
      Dificultad,
      Duracion,
      Temporada,
    });

    const paisesRelacionados = await Country.findAll({
      where: {
        Nombre: {
          [Op.in]: Paises,
        },
      },
    });

    await nuevaActividad.addCountries(paisesRelacionados);

    return res.status(201).json(nuevaActividad);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = POST_ACTIVITY;
