// build your `Resource` model here
const knex = require('knex');
const config = require('../../knexfile.js');
const db = knex(config.development);

const getTasks = async () => {
    try {
        const tasks = await db('projects').join('tasks', 'tasks.project_id', 'projects.id').select('projects.name as projectName', 'tasks.description as taskDescription');
        return tasks;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const addTask = async (taskObject) => {
    try {
        const newTask = await db('tasks').insert(taskObject)
        return newTask;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getTasks, addTask };