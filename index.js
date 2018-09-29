// THE WEBSHIMOTO ALGO IN JAVASCRIPT
var request = require('request');

exports.isEpocum = function isvalid(url, cb) {
return request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
  var valid = 'False';
  	try {
    	var webdata = body.split("<script src='https://www.epocum.com/epocum.js'></script>");
    	//console.log(webdata[0]);
    	//var weblink = webdata[1];
    	if (webdata) { var valid = 'True'; }
     } catch (err) {
     	var valid = 'False';
     }
  }
  cb(valid);
});
}

exports.getWallet = function getWallet(url, cb) {
return request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
  var valid = 'False';
  	try {
 
		var addrWallet = body.split("epocum('").pop().split("')").shift();
    	
    	if (addrWallet) { var w = addrWallet; }
     } catch (err) {
     	var w = 'Nothing';
     }
  }
  cb(w);
});
}


