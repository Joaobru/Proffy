import Knex from 'knex';

export async function up(knex:Knex) {
  return knex.schema.createTable('proffy', table => {
    table.increments('id').primary();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();

    table.integer('id_users')
    .notNullable()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  });
}

export async function down(knex:Knex) {
  return knex.schema.dropTable('proffy');
}