import Knex from "knex";

const Database = Knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      port : 3306,
      password : '',
      database : 'knex'
    }
});


export default Database