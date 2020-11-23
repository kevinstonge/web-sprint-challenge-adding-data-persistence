// build your `/api/tasks` router here
const express = require('express');
const model = require('./model.js');
const router = express.Router();
const Tasks = require('./model.js');

router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.getTasks();
        res.status(200).json({ tasks })
    } catch (error) {
        console.log(error);
        throw error;
    }
});

router.post('/', async (req, res) => {
    const { description, notes, completed, project_id } = req.body;
    if (!description || !project_id) {
        res.status(401).json({message: "Bad request: resource must include at least a description and project_id"})
    } else {
        const newTask = {
            ...description && { description },
            ...notes && { notes },
            ...completed && { completed },
            ...project_id && { project_id }
        };
        const task = await Tasks.addTask(newTask);
        res.status(201).json({message: "successfully created task", task})
    }
})

module.exports = router;