const express = require('express')
const app = express()
const port = 3000

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

app.get('/sample/:id', function(req, res) {

  var id = req.params.id; 

   
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})