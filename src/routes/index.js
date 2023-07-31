const { Router } = require("express");
const {Api_A_DB ,verificarPaisesEnDB} = require("../controladores/data_a_DB");
const  GET_CONTRIES = require("../controladores/Get_Contries");
const GET_CONTRIES_BY_ID = require("../controladores/GET_CONTRIES_BY_ID");
const GET_CONTRIES_BY_NAME = require("../controladores/GET_CONTRIES_BY_NAME");
const POST_ACTIVITY = require("../controladores/POST_ACTIVITY");
const GET_ACTIVITY = require("../controladores/GET_ACTIVITY");
const router = Router();


router.get("/countries",GET_CONTRIES);
router.get("/activities",GET_ACTIVITY);
router.get('/countries/name', GET_CONTRIES_BY_NAME);
router.post('/activities',POST_ACTIVITY);
router.get("/countries/:idPais", GET_CONTRIES_BY_ID);


module.exports = router;
