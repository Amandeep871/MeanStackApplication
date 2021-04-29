const { response } = require('express');
const request = require('request');
var apiOptions = {
    server: 'http://localhost:3000'
}

const about = function(req, res){
    res.render('about', {title: 'About Music Database'});
};
module.exports = {
    about
};