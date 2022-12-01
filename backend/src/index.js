const express = require("express");
const app = express();
const port = 5000;
const {mongoose} = require('./config/database')
const morgan = require('morgan')
const path = require('path')

//Settings
app.set('port', process.env.PORT || 5000 )

//Middlewares
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use('/api/envios' , require('./routes/envioRoutes'))
app.use('/api/usuarios' , require('./routes/usuarioRoutes'))

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.send('Welcome to my api')
})

//Starting the server
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});