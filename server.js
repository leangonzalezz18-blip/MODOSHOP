/* ==========================================================================
   MODO SHOP · servidor estático mínimo (opcional)

   La web funciona abriendo index.html con doble clic. Este servidor sirve para:
     · verla desde el celular o desde otra PC de la red local
     · probarla igual que cuando esté publicada

   Uso:  node server.js      →  http://localhost:4322
   ========================================================================== */

var http = require('http');
var fs = require('fs');
var path = require('path');
var os = require('os');

var PUERTO = process.env.PORT || 4322;
var RAIZ = __dirname;

var TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

http.createServer(function (req, res) {
  var rel = decodeURIComponent(req.url.split('?')[0]);
  if (rel === '/') rel = '/index.html';

  var archivo = path.join(RAIZ, path.normalize(rel).replace(/^(\.\.[\/\\])+/, ''));

  // no salir de la carpeta del proyecto
  if (archivo.indexOf(RAIZ) !== 0) {
    res.writeHead(403); res.end('Prohibido');
    return;
  }

  fs.readFile(archivo, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404</h1><p>No se encontro ' + rel + '</p>');
      return;
    }
    res.writeHead(200, { 'Content-Type': TIPOS[path.extname(archivo).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PUERTO, function () {
  console.log('MODO SHOP · web en http://localhost:' + PUERTO);

  var redes = os.networkInterfaces();
  Object.keys(redes).forEach(function (nombre) {
    redes[nombre].forEach(function (i) {
      if (i.family === 'IPv4' && !i.internal) {
        console.log('En la red local:    http://' + i.address + ':' + PUERTO);
      }
    });
  });
});
