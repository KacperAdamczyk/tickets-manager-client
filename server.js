const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

const port = 8081;
const targetPort = 8080;
const targetIp = 'localhost';
const target = `http://${targetIp}:${targetPort}`;

server.use(cors({
  origin: 'http://192.168.0.6:8081'
}));
server.use(morgan('short'));
server.use(express.static('dist/be-frontend'));
server.use('/api', proxy({ target, changeOrigin: true }));

server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'be-frontend', 'index.html'));
});

server.listen(port, () => {
  console.log(`Proxy target ${target}`);
  console.log(`Server on port: ${port}`);
});
