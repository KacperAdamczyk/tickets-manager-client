const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const morgan = require('morgan');

const server = express();

const PORT = 8081;
const target = 'http://192.168.0.6:8080';

server.use(morgan('short'));
server.use(express.static('dist/be-frontend'));
server.use('/api', proxy({ target, changeOrigin: true }));

server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'be-frontend', 'index.html'));
});

server.listen(PORT, () => {
  console.log(`Proxy target ${target}`);
  console.log(`Server on port: ${PORT}`);
});
