const http = require('http')

http.get(process.argv[2], response => {
    response.setEncoding('utf8');
    let resbody = ''
    response.on('data', (chunk) => { 
        resbody+= chunk
    })
    response.on('end', () => { 
        console.log(`${resbody.length}\n${resbody}`)
    })
});