// build your server here
const express = require("express");
const cors = require("cors");
const server = express();
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.status(200).json({message: "server online"})
})
const projectsRouter = require('./project/router.js');
server.use('/api/projects', projectsRouter);

const resourcesRouter = require('./resource/router.js');
server.use('/api/resources', resourcesRouter);

const tasksRouter = require('./task/router.js');
server.use('/api/tasks/', tasksRouter);

module.exports = server;