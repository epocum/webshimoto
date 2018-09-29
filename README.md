# webshimoto
Epocum network nodes driver

# Driver for website as node verification

https://epocum.github.io/webshimoto/

npm install webshimoto

# Working Example

  <highlight :code="code">
var algo = require('webshimoto');

algo.isEpocum('https://www.epocum.com', function(valid) {
   console.log('Validity link: ' + valid);
});

algo.getWallet('https://www.epocum.com', function(w) {
   console.log('onSite Wallet: ' + w);
});

</highlight>


Save it as app.js
Running : node app.js

Example response:

Validity link: True
onSite Wallet: 0xA6CB6c3Bc4174C6ec2031D3a5894FD6a43D047F0
