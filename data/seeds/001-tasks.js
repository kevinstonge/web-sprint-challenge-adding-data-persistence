
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'write all the code', notes: 'write all the code for this project', completed: false, project_id: 1},
        {id: 2, description: 'test all the code', notes: 'perform tests using Postman', completed: false, project_id: 1},
        { id: 3, description: 'write all the items', notes: 'write all the items you need for thanksgiving day', completed: false, project_id: 2 },
        {id: 4, description: 'write all the stores', notes: 'write all the stores you need to visit to get everything', completed: false, project_id: 2},
      ]);
    });
};
