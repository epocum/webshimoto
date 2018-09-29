# Webshimoto
Epocum network algorithm for nodes driver
https://epocum.github.io/webshimoto/

```bash
npm install webshimoto
```

# Working Example

```js
var algo = require('webshimoto');

//Return True/False if the node is validated by the network
algo.isEpocum('https://www.epocum.com', function(validation) {
   console.log('Validity link: ' + valid);
});

//Return the node wallet address
algo.getWallet('https://www.epocum.com', function(walletaddress) {
   console.log('onSite Wallet: ' + w);
});

```

```bash
Save it as app.js
Running : node app.js

Example response:

Validity link: True
onSite Wallet: 0xA6CB6c3Bc4174C6ec2031D3a5894FD6a43D047F0
```
