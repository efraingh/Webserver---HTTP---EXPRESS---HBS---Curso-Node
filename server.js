const express = require('express');
const app = express();

const hbs = require('hbs');


//middelware

app.use(express.static(__dirname + '/public'))

// Express HBS
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    //res.send('Hola Mundo');
    // let salida = {
    //     nombre: 'efrain llusco',
    //     edad: 30,
    //     url: req.url
    // }
    //res.send(salida);
    res.render('home',{
        nombre: 'efris',
        anio: new Date().getFullYear()
    });
});

/*app.get('/data', (req, res) => {
    res.send('Hola Data');
});*/

app.listen(3000, ()=>{
    console.log('Escuchando peticiones en el puerto 3000');
});