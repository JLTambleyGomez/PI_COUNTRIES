const { Activity } = require('../db');

const GET_ACTIVITY = async(req, res) => {
  try {
    
    const DB_DATA = await Activity.findAll();
    return res.status(200).json(DB_DATA);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};


module.exports = GET_ACTIVITY;