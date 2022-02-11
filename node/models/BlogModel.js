// Importar a conexao com o banco de dados
import db from '../database/db.js';
// Importar sequelize
import { DataTypes } from 'sequelize';

const BlogModel = db.define('blogs', {
  titulo: { type: DataTypes.STRING },
  conteudo: { type: DataTypes.STRING },
})

export default BlogModel;