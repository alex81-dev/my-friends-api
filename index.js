const http = require('http');

const port = parseInt(process.env.PORT) || 3050;

const server = http.createServer((request, response) => {
  switch(request.url) {
    case '/':
      response.writeHead(200, {'Content-Type': 'application/json'});
      // response.statusCode(200);
      // response.statusMessage('OK');
      response.end(JSON.stringify('Hello world'));
      break;
    default:
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end(JSON.stringify('Not found'));
  };
});

server.listen(port, () => {
  console.log('Servidor operativo en pto 3050 por Localhost');
});

// server.on('error', error => {
//   console.log(error);
// })
