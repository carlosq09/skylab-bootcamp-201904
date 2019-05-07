const net = require('net');
const date = new Date()
const server = net.createServer((c) => {
  c.write(`${date.getFullYear()}-0${date.getMonth()+1}-0${date.getDate()} ${date.getHours()}:${date.getMinutes()}`);
  c.end('\n')
});
server.listen(process.argv[2])