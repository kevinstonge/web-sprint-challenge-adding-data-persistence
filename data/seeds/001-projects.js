
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'complete data persistence project', description: 'create a relational database using knex, node, express, and sqlite3 that stores information about projects, resources, and tasks', completed: false},
        {id: 2, name: 'prepare for thanksgiving', description: 'make a list of all of the items you need for thanksgiving day and determine which stores you need to visit', completed: false}
      ]);
    });
};
