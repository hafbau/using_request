const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
        .on('error', function (err) { throw err; })
        .on('response', (res) => {
          console.log(res.statusCode);
          console.log(res.statusMessage);
          console.log(res.headers['content-type']);
          console.log('Downloading image...');
          })
        .pipe(fs.createWriteStream('./future.jpg')
        .on('finish', () => console.log('Download complete.')));