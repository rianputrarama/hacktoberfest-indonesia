const cheerio = require('cheerio');
const request = require('request');
 
var hal = " bogor"
var wkt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').split(" ")[0];
console.log(wkt)
var url = "https://api.banghasan.com/sholat/format/json/kota/nama/"+ hal;
request.get({
  headers: {'User-Agent':'Mozilla/5.0 (X11; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0'},
  url:     url,
},function(error, response, body){
    let $ = cheerio.load(body);
//var bodi = body.replace("}1", "}");
var d = JSON.parse(body);
var id = d.kota[0].id;
var kota = d.kota[0].nama;
request.get({
  headers: {'User-Agent':'Mozilla/5.0 (X11; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0'},
  url:     "https://api.banghasan.com/sholat/format/json/jadwal/kota/"+ id +"/tanggal/"+ wkt,
},function(error, response, body){
    let $ = cheerio.load(body);
var d = JSON.parse(body);
console.log(d)
console.log(` 

Jadwal Sholat untuk ${kota}

Tanggal ${d.jadwal.data.tanggal}

Subuh : ${d.jadwal.data.subuh}
Dzuhur : ${d.jadwal.data.dzuhur}
Ashar :${d.jadwal.data.ashar}
Magrib :${d.jadwal.data.maghrib}
Isha :${d.jadwal.data.isya}
`)
})		
})
