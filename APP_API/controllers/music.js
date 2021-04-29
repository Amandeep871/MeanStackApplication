 const mongoose = require('mongoose');
 
 const music = mongoose.model('music');

 const getMusic = function(req, res){
    music.find().exec(function (err, musicData){
        if (err){
            res
                .status(404)
                .json(err);
            return ;
        }
        res
            .status(200)
            .json(musicData);
    });
};

const createMusic = function(req, res){
    music.create({
        title: req.body.title,
        genre: req.body.genre,
        artistName: req.body.artistName,
        albumName: req.body.albumName,
        releaseDate: req.body.releaseDate,
       
    }, (err, musicData)=>{
        if(err){
            res
                .status(404)
                .json(err);
            return;
        }
        res
            .status(200)
            .json({musicData});
    });
};

const getSingleMusic = function(req, res){
    const musicId = req.params.musicid;
    if(musicId){
        music.findById(musicId)
            .exec((err, musicData)=>{
                if(err){
                    res
                        .status(404)
                        .json(err)
                    return;
                }
                res
                    .status(200)
                    .json(musicData);
            });

    }
    else{
        res
            .status(404)
            .json("message", "musicid does not exist!")
    }
};

const updateMusic = function(req, res){
    if(!req.params.musicid){
        res
            .status(404)
            .json({"message":"Not Found, music is required"});
        return;
    }
    music.findById(req.params.musicid)
        .exec((err, musicData)=>{
            if(!musicData){
                req.status(404)
                    .json({"message":"musicid not found"});
                return;
            }
            else if(err){
                res
                    .status(400)
                    .json(error);
                return;
            }
            musicData.title= req.body.title;
            musicData.genre= req.body.genre;
            musicData.artistName= req.body.artistName;
            musicData.albumName= req.body.albumName;
           
            musicData.releaseDate= req.body.releaseDate;
           
            musicData.save((err, responseData)=>{
                if(err){
                    res
                        .status(404)
                        .json(err);
                }
                else{
                    res
                        .status(200)
                        .json(responseData);
                }
            })
        });
};

const deleteMusic = function(req, res){
    const musicId = req.params.musicid;
    if(musicId){
        music.findByIdAndRemove(musicId)
            .exec((err, musicData)=>{
                if(err){
                    res
                        .status(404)
                        .json(err)
                    return;
                }
                res
                    .status(200)
                    .json(null);
            });

    }
    else{
        res
            .status(404)
            .json("message", "musicid does not exist!")
    }
};

module.exports = {
    getMusic,
    createMusic,
    getSingleMusic,
    updateMusic,
    deleteMusic
};