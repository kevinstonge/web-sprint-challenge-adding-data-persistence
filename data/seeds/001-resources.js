
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, name: 'computer', description: 'internet connected computer with vscode' },
        { id: 2, name: 'lambdaschool website', description: 'lambdaschool.instructure.com has all of the information you need to complete the data persistence project' },
        { id: 3, name: 'paper', description: 'paper to write things down' },
        { id: 4, name: 'pencil', description: 'pencil to write things down' }
      ]);
    });
};
