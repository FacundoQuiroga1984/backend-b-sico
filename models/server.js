const express = require('express')
const cors = require('cors')

class Server{

constructor ()  {
    
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios'
    
    //Midlewares
    this.middlewares();

    //rutas de mi aplicación
    this.routes();

}

middlewares(){
       
    this.app.use(cors())

    this.app.use(express.json())

            //directorio pùblico
    this.app.use(express.static('public'))

}
   
routes () {

    this.app.use(this.usuariosPath, require('../routes/user'));

}

listen () {
    
    this.app.listen(this.port, ()=>{
        console.log('servidor corriendo en puerto', this.port);
    })

}

};

module.exports = Server;