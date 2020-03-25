// O metodo up é p responsável pela criação da tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
   table.string('id').primary();
   table.string('name').notNullable();
   table.string('email').notNullable();
   table.string('whatsapp').notNullable();
   table.string('city').notNullable();
   table.string('uf', 2).notNullable();
   
  });
};
//Responsável por desfazer algum metodo feito anteriormente(se der problema, deletar)
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
