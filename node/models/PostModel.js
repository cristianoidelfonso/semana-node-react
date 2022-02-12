// Importar a conexao com o banco de dados
import db from '../database/db.js';
// Importar sequelize
import { DataTypes } from 'sequelize';

const PostModel = db.define('posts', {
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

export default PostModel;