const axios = require("axios");
const { Country } = require("../db");



const Api_A_DB = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000)); 
    const { data } = await axios.get("http://localhost:5000/countries");

    const createCountryDB = data.map(countryData => {
      const capital = Array.isArray(countryData.capital) ? countryData.capital[0] : "";

      return {
        Id: countryData.cca3,
        Nombre: countryData.name.common,
        Imagen_de_la_bandera: countryData.flags.png,
        Continente: countryData.continents[0],
        Capital: capital,
        Subregion: countryData.subregion,
        Area: countryData.area,
        Poblacion: countryData.population,
      };
    });

    await Country.bulkCreate(createCountryDB, { ignoreDuplicates: true });
    console.log("Guardado de API a DB:");

  } catch (error) {
    console.error("Error al obtener los países desde la API:", error);
  }
};

Api_A_DB();




module.exports =  Api_A_DB;

