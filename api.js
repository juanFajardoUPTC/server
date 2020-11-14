const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Ejemplo Params
app.get('/juegos/:nombreJuego', function(req, res) {

    console.log()
    if(req.params.nombreJuego === 'DarkSouls'){
        res.send('Juego de Aventura')
    }
  
})

{ nombreJuego: 'DarkSouls'}

//Ejemplo Body
app.post('/juegos/', function(req, res) {

    console.log(req.body.name)
    res.send('Pagina de juegos')
   
});

//Ejemplo Query
app.post('/peliculas/', function(req, res) {

    console.log(req.query.name)
    res.send('Pagina de Peliculas')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})