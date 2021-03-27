const http = require('http')

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

server.listen(3050, () => {
  console.log('Servidor operativo en pto 3050 por Localhost');
});
