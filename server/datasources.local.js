// http://stackoverflow.com/questions/21651567/how-to-configure-strongloop-loopback-mongodb-datasource-for-deployment-to-heroku
var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL || 
  process.env.MONGO_URL ||
  'mongodb://localhost/strongloop';

console.log("Using mongoUri: " + mongoUri);

module.exports = {
  mongoDB: {
    defaultForType: "mongodb",
    connector: "loopback-connector-mongodb",
    url: mongoUri
  }
};