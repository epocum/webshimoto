var algo = require('webshimoto');

algo.isEpocum('https://www.epocum.com', function(valid) {
   console.log('Validity link: ' + valid);
});

algo.getWallet('https://www.epocum.com', function(w) {
   console.log('onSite Wallet: ' + w);
});


