
const mongoose = require('mongoose');



const dbURI = 'mongodb+srv://Amandeep:Gill1234@cluster0.d7czo.mongodb.net/<dbname>retryWrites=true&w=majority';
mongoose.connect(dbURI, {dbName: 'musicDB'}); 
 mongoose.connection.on('connected', () => {
        console.log(`Mongoose connected to MongoDb`);
     }); 
     mongoose.connection.on('error', err => {                 
            console.log('Mongoose connection error:', err); 
          }); 
            mongoose.connection.on('disconnected', () => {
                   console.log('Mongoose disconnected'); 
                 }); 
                   const gracefulShutdown = (msg, callback) => {
                          mongoose.connection.close( () => {
               console.log(`Mongoose disconnected through ${msg}`);
                     callback();
                    });
                  }; 
                   // For nodemon restarts
                     process.once('SIGUSR2', () => {
                           gracefulShutdown('nodemon restart', () => {
                                 process.kill(process.pid, 'SIGUSR2'); 
                                    });
                                  }); 
                                    // For app termination
                                      process.on('SIGINT', () => {
                                              gracefulShutdown('app termination', () => {
                                                        process.exit(0); 
                                                       });
                                                      }); 
                                                        // For Heroku app termination
                                                          process.on('SIGTERM', () => {
                                                                  gracefulShutdown('Heroku app shutdown', () => {
                              process.exit(0); 
                               });
                              });

                              require('./music');
