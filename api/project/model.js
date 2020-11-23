// build your `Project` model here
const knex = require('knex');
const config = require('../../knexfile.js');
const db = knex(config.development);

const getProjects = async () => {
    try {
        const projects = await db('projects');
        return projects;
    } catch (error) {
        throw error;
    }
}

const addProject = async (projectObject) => {
    try {
        const newProject = await db('projects').insert(projectObject)
        return newProject;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getProjects, addProject }