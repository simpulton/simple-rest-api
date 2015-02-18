var port = process.env.PORT ||
	1337;
var url = "http://localhost:" + port;

console.log("Using port: " + port);
console.log("Using url: " + url);

module.exports = {
  port: port,
  url: url
};