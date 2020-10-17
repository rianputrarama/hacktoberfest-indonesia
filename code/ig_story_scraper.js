const axios = require('axios')
const qs = require('querystring')
const cheerio = require('cheerio');
const imageToBase64 = require('image-to-base64');
const https = require('https');
const fs = require('fs');
var url = "https://www.instadp.com/stories/rzqrhma_";

const config = {
  headers: {
    'Content-Type': 'text/html; charset=UTF-8'
  }
}
axios.get(url , config)
  .then((result) => {
    // Do somthing
let $ = cheerio.load(result.data);
//let ig = [];
var  kata = $('a[class="download-btn"]').attr('href');
   
console.log(kata)

const file = fs.createWriteStream("file.jpg");
const request = https.get(kata, function(response) {
  response.pipe(file);
});
}
)        
  .catch((err) => {
console.log("sonething went wrong");
  })

