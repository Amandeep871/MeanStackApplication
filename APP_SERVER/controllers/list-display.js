var MusicData = [
    {
        Album_Name:"Get Lucky",
        Artist:"Mark"
    },
    {
        Album_Name:"Out Into The Snow",
        Artist:"Tiny Vipes"
    },
    {
        Album_Name:"Blood from Stars",
        Artist:"Carly Simon"
    }
]

const { response } = require('express');
const request = require('request');
var apiOptions = {
    server: 'http://localhost:3000'
}

const _renderHomePage = function(req, res, responseBody){
    res.render('list-display', {
        music: responseBody
    });
};

const listDisplay = function(req, res){
    const path = '/api/music';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(requestOptions,
        (err, response, body)=>{
            _renderHomePage(req, res, body);
        });
};


module.exports = {
    listDisplay
};