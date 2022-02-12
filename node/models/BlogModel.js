// Importar a conexao com o banco de dados
import db from '../database/db.js';
// Importar sequelize
import { DataTypes } from 'sequelize';

const BlogModel = db.define('blogs', {
  title: { 
    type: DataTypes.STRING 
  },
  content: { 
    type: DataTypes.STRING 
  },
  author: {
    type:DataTypes.STRING
  }
})

export default BlogModel;