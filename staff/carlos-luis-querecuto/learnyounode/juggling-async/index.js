const http = require('http')
const async = require('async')

const  {argv:[,,...urls]}= process

let res= new Array(urls.length)
res.fill('')

/* async.forEachOf(urls,function(url,key,callback){
    http.get(url, response => {
        response.setEncoding('utf8');
        let resbody = ''
        response.on('data', (chunk) => { 
            resbody+= chunk
        })
        response.on('end', () => { 
            res[key]=resbody
        })
        callback()
    });
}, () => res.forEach(element => console.log(element))) */

async.map(urls,function(url,callback){
    http.get(url, response => {
        response.setEncoding('utf8');
        let resbody = ''
        response.on('data', (chunk) => { 
            resbody+= chunk
        })
        response.on('error', (err) => { 
            callback(err)
        })
        response.on('end', () => { 
            callback(null,resbody)
        })
    });
}, (err,data) => data.forEach(element => console.log(element)))
 