const { response } = require('express');
const request  = require('request');
var apiOptions = {
    server: 'http://localhost:3000'
}

const index = function(req, res){
    res.render('index', {title: 'Data About Music'});
};
module.exports = {
    index
};