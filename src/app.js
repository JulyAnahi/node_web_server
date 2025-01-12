const {envs} = require('./config/env')
const {startServer}=require('./server/server')
//funcion agnostica(por que no tiene nombre) autoconvocada
const main = () => {
    console.log('Aqui comenzamos el servidor')
    startServer({
        port: envs.PORT,
        public_path:envs.PUBLIC_PATH
    })
}

(async () => {
    main()
})();

