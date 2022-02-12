// Importar sequelize
import { Sequelize } from 'sequelize';

const db_mysql = new Sequelize('semana_node_react', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const db_sqlite = new Sequelize({
  dialect: 'sqlite',
  storage: './database/database.sqlite'
});

export default db_sqlite;
