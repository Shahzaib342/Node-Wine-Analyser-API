var file_handler = require('./fileHandler');
var analysis = require('./analysis');

var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(8000, function () {
    console.log("Server is up!");
});

app.get('/get', function (req, res) {
    let dictionaries = file_handler.readJsonFromFile("wines.json");
    res.send(dictionaries);
});

app.get('/tested-items', function (req, res) {
    let tested_items = analysis.testedItems(file_handler.readJsonFromFile("wines.json"));
    res.send({tested: tested_items});
});

app.get('/max-points', function (req, res) {
    let max_points = analysis.maxPoints(file_handler.readJsonFromFile("wines.json"));
    res.send({max_points: max_points});
});

app.get('/cheapest-wine', function (req, res) {
    let cheapest_wine = analysis.cheapestWine(file_handler.readJsonFromFile("wines.json"));
    res.send(cheapest_wine);
});

app.get('/popular-country', function (req, res) {
    res.send(analysis.popularCountry(file_handler.readJsonFromFile("wines.json")));
});

app.get('/provinces', function (req, res) {
    let provinces = analysis.provinces(file_handler.readJsonFromFile("wines.json"));
    res.send(provinces);
});

app.get('/tested-in-california', function (req, res) {
    res.send({ tested_in_california: analysis.testedInCalifornia(file_handler.readJsonFromFile("wines.json"))});
});

app.get('/count-countries', function (req, res) {
    res.send(analysis.countryCount(file_handler.readJsonFromFile("wines.json")));
});

app.get('/average-price', function (req, res) {
    res.send(analysis.averagePrice(file_handler.readJsonFromFile("wines.json")));
});

app.post('/write', function(request, response) {
    let res  = file_handler.writeFile(request.body);
    console.log(res);
})