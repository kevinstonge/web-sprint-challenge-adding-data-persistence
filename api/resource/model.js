// build your `Resource` model here
const knex = require('knex');
const config = require('../../knexfile.js');
const db = knex(config.development);

const getResources = async () => {
    try {
        const resources = await db('resources');
        return resources;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const addResource = async (resourceObject) => {
    try {
        const newResource = await db('resources').insert(resourceObject)
        return newResource;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getResources, addResource };