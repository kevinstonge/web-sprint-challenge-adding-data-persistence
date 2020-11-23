// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Projects = require('./model.js');

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.getProjects();
        res.status(200).json({ projects });
    } catch (error) {
        res.status(500).json({ message: "error retrieving projects from database" })
    }
})

router.post('/', async (req, res) => {
    const { name, description, completed } = req.body;
    if (!name) {
        res.status(401).json({message: "Bad request: project must include a name"})
    } else {
        const newProject = {
            ...name && { name },
            ...description && { description },
            ...completed && { completed }
        };
        const project = await Projects.addProject(newProject);
        res.status(201).json({message: "successfully created project", project})
    }
})

module.exports = router;