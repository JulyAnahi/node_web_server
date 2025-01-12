// require('dotenv').config()//hace que la variavle de entorno se seteen en nuestro objeto proyect
import env from 'dotenv';
env.config();

// const { get } = require('env-var');
import envvar from 'env-var';

export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

// module.exports = {
//     envs
// }