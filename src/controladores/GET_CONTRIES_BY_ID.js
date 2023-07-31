const { Country, Activity } = require('../db');

const GET_CONTRIES_BY_ID = async (req, res) => {
  const { idPais } = req.params;
  try {
    const country = await Country.findByPk(idPais, {
      include: {
        model: Activity,
      }, });
    if (!country) {
      return res.status(404).json({ message: 'Pais no Encontrado' }); }
        return res.status(200).json(country);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });}};

module.exports = GET_CONTRIES_BY_ID;
