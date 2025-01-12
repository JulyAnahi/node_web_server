const express = require('express');
const path = require('path');// para poder leer nuestras carpetas (rutas)

const startServer = (options) => {
    const { port, public_path = 'public' } = options;

    const app = express();
    //midleware para poder usarlosse usa la palabra use
    app.use(express.static(public_path));// contenido estatico que esta en la carpeta public

    app.get('*', (req,res)=>{//siempre trae la pagina html a pesar de que la url cambie es para sigle page(funciona para react y agular)
        const indexPath=path.join(__dirname + '../../public/index.html'); //con dirname entramos a nuestro directorio
        res.sendFile(indexPath)//siempre vamos a estar devolviendo nuestro html ante cualquier pedido
    })

    app.listen(port,()=>{
        console.log(`Escuchando en el puerto ${port}`)
    })

};

module.exports = {
    startServer
}