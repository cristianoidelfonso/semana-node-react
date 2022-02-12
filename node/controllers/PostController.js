// importando o modelo
import PostModel from '../models/PostModel.js';

//* Métodos para o CRUD *//

// Mostrar todos os registros
export const getAllPosts = async (request, response) => {
  try {
    
    const posts = await PostModel.findAll();
    
    response.json(posts);

  } catch (error) {

    response.json( { 'message': error.message } );

  }
}

// Mostrar um registro
export const getPost = async (request, response) => {
  try {
    
    const post = await PostModel.findAll( { where: { id: request.params.id } } );
    
    response.json(post);

  } catch (error) {
    
    response.json( { 'message': error.message } );

  }
}


// Criar um registro
export const createPost = async(request, response) => {
  try {
    
    await PostModel.create(request.body);

    response.json( { 'message': 'Registro criado com sucesso!' } );

  } catch (error) {

    response.json( { 'message': error.message } );
    
  }
}

// Atualizar um registro
export const updatePost = async(request, response) => {
  try {

    await PostModel.update(request.body, { where: { id: request.params.id } } );

    response.json( { 'message': 'Registro atualizado com sucesso!' } );
    
  } catch (error) {
    
    response.json( { 'message': error.message } );

  }
}

// Apagar um registro
export const deletePost = async(request, response) => {
  try {

    PostModel.destroy( { where: {id: request.params.id } } );

    response.json( {'message': 'Registro apagado com sucesso!'} );
    
  } catch (error) {
    
    response.json( { 'message': error.message } );

  }
}