const mongoose = require('mongoose');

var musicSchema = new mongoose.Schema({
    title :  {
        type: String,
        required: true
    },
    genre:{
        type: String,
        required:true

    },
    albumName:{

        type: {
            name: {
                type: String,
                required: true
            },
            img: {
                type: String,
                required: false
            }
        },
        required: true
    },
    artistName:{
        type: String,
        required: true
   },
    releaseDate:{
        type: Date,
        required: true
     }
  });

 mongoose.model('music', musicSchema,'music');

//module.exports = music;