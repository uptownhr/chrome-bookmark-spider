const fs = require('fs'),
  cheerio = require('cheerio')

let html = fs.readFileSync('./bookmarks.html')
let $ = cheerio.load(html)

let alist = $('a').map( (i,e) => $(e).attr('href') ).get()


let json = JSON.stringify(alist)

console.log('json', json)

fs.writeFileSync('./a.json', json)