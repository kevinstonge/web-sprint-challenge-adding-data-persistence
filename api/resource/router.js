// build your `/api/projects` router here
const express = require('express');
const model = require('./model.js');
const router = express.Router();
const Resources = require('./model.js');

router.get('/', async (req, res) => {
    try {
        const resources = await Resources.getResources();
        res.status(200).json({ resources })
    } catch (error) {
        console.log(error);
        throw error;
    }
});

router.post('/', async (req, res) => {
    const { name, description } = req.body;
    if (!name) {
        res.status(401).json({message: "Bad request: resource must include a name"})
    } else {
        const newResource = {
            ...name && { name },
            ...description && { description }
        };
        const resource = await Resources.addResource(newResource);
        res.status(201).json({message: "successfully created resource", resource})
    }
})

module.exports = router;