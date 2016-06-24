const alist = require('./a.json'),
  { spawn } = require('child_process'),
  Promise = require('bluebird'),
  url = require('url')

Promise.map(alist, function(href){
  return new Promise( resolve => {
    console.log(href)
    let { hostname } = url.parse(href)
    console.log(hostname)

    let getsh = spawn('./get.sh', [`--domains ${hostname} ${href}`])
    //console.log(getsh)
    getsh.stdout.on('data', console.log)
    getsh.stderr.on('data', data => {
      console.log(data.toString())
    })
    getsh.on('close', resolve)
  })
}, {concurrency:5})