require('dotenv').config()//hace que la variavle de entorno se seteen en nuestro objeto proyect
const { get } = require('env-var');

const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

module.exports = {
    envs
}