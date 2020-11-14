const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

let listaJuegos = ["DarkSouls", "CyberPunk", "Hades"]
let listaPeliculas = ["Advengers", "300", "Interestelar"]
let listaSeries = ["La casa de Papel", "Mr Robot", "One Punch Man"]

var lista = "";

{   opcion: 'juegos'
    opcion: 'peliculas'
    opcion: 'series'
}

app.get('/', (req, res) => {
    res.send('Pagina Principal!')
  })

app.get('/:opcion', function(req, res) {

    lista="";
    console.log()
    if(req.params.opcion === 'juegos'){
        listaJuegos.forEach(function(elemento, indice, array) {
            console.log(elemento, indice)
            lista += elemento+"<br>";
        })
        res.send(lista)
    } else

    if(req.params.opcion === 'peliculas'){
        listaPeliculas.forEach(function(elemento, indice, array) {
            console.log(elemento, indice)
            lista += elemento+"<br>";
        })
        res.send(lista)
    } else

    if(req.params.opcion === 'series'){
        listaSeries.forEach(function(elemento, indice, array) {
            console.log(elemento, indice)
            lista += elemento+"<br>";
        })
        res.send(lista)
    }
  
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})