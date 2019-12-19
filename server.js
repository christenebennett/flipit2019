const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const UsersRouter = require('./usersRouter');

const server = express();
const parser = express.json();
const securityMiddleware = helmet();
const loggerMiddleware = logger('dev');

server.use(parser, cors(), securityMiddleware, loggerMiddleware);
server.use('/api/users', UsersRouter);

server.get('/api', (req, res) => {
  res.send(`
    <h1>Meditation User API</h1>
  `)
})

module.exports = server;