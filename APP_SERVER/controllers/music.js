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

const homelist = function(req, res){
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

const _renderDetailPage = function(req, res, responseBody){
    res.render('details', {
        music: responseBody
    });
};

const musicInfo = function(req, res){
    const path = `/api/music/${req.params.musicid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method: 'GET',
        json : {}
    };
    request(
        requestOptions, (err, response, body) => {
            _renderDetailPage(req, res, body);
        }
    );
};

const _renderCreatePage = function(req, res){
    res.render('create-new-music', {
        title: "Create New Music"
    });
}

const addNewMusic = function(req, res){
    _renderCreatePage(req, res);
}

const doAddNewMusic = function(req, res){
    const path = '/api/music';
   
    const postdata = {
        title: req.body.title,
        genre: req.body.genre,
        artistName: req.body.artistName,
        albumName: {
            name: req.body.albumName,
            img: req.body.albumPicture
        },
        releaseDate: req.body.releaseDate+"T04:00:00.000+00:00",
        
    };
    console.log(postdata);
    const requestOptions = {
        url: apiOptions.server+path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, response, body) =>{
            if(response.statusCode===200){
                res.redirect('/');
            }
            else{
                console.log(err);
            }
        }
    );
};

module.exports = {
    _renderHomePage,
    homelist,
    _renderDetailPage,
    musicInfo,
    addNewMusic,
    doAddNewMusic
};