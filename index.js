const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index', {
        autor: 'Diego Andres Martinez Salvatierra', 
        year: new Date().getFullYear(),
        title: 'Inicio',
        grado: '4-F'
    });
});

app.get('/vangogh', (req, res)=>{
    res.render('vincent', {
        autor: 'Diego Andres Martinez Salvatierra', 
        year: new Date().getFullYear(),
        title: 'Vincent Van Gogh', 
        grado: '4-F'
    });
});

app.get('/pablo', (req, res)=>{
    res.render('picasso', {
        autor: 'Diego Andres Martinez Salvatierra',
        year: new Date().getFullYear(),
        title: 'Pablo Picasso',
        grado: '4-F'
    });
});

app.get('/claude', (req, res)=>{
    res.render('monet', {
        autor: 'Diego Andres Martinez Salvatierra',
        year: new Date().getFullYear(),
        title: 'Claude Monet',
        grado: '4-F'
    });
});

app.get('/davinci', (req, res)=>{
    res.render('leonardo', {
        autor: 'Diego Andres Martinez Salvatierra',
        year: new Date().getFullYear(),
        title: 'Leonardo Da Vinci',
        grado: '4-F'
    });
});
app.listen(3000,()=>{
    console.log("Escuchando al puerto 3000");
});