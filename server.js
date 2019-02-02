require('dotenv').config();
const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const { PORT, TARGET_PORT, TARGET_HOST, TARGET } = process.env;

const server = express();

const port = PORT;
const targetPort = TARGET_PORT;
const targetHost = TARGET_HOST;
const target = TARGET || `http://${targetHost}:${targetPort}`;

server.use(cors());
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
