
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
            tbl.string('description', 2048);
            tbl.boolean('completed').defaultTo(false).notNullable();
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('description', 1024).notNullable();
            tbl.string('notes', 2048);
            tbl.boolean('completed').defaultTo(false).notNullable();
            tbl.integer('project_id').references('id').inTable('projects').notNullable().onDelete('cascade');
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
            tbl.string('description', 1024);
        })
        .createTable('projects-resources', tbl => {
            tbl.increments();
            tbl.integer('project_id').references('id').inTable('projects').notNullable().onDelete('cascade');
            tbl.integer('resource_id').references('id').inTable('resources').notNullable().onDelete('cascade');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects-resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects');
};
