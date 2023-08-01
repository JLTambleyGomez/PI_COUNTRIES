const { Sequelize } = require("sequelize");
const { DataTypes } = require("sequelize");

const fs = require("fs");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") }); // para recibir las constantes de .env
const { DB_USER, DB_PASSWORD, DB_DEPLOY } = process.env;


// DEPLOYMENT:
const sequelize = new Sequelize(
         DB_DEPLOY,    {
        logging: false,
        native: false,
    }
);





const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);


const { Country,Activity } = sequelize.models;

// Aca vendrian las relaciones

Country.belongsToMany(Activity, { through: 'Country_Activity', timestamps: false });
Activity.belongsToMany(Country, { through: 'Country_Activity', timestamps: false  });
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};