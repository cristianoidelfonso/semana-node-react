// importando o modelo
import BlogModel from '../models/BlogModel';

//* Métodos para o CRUD *//

// Mostrar todos os registros
export const getAllBlogs = async (request, response) => {
  try {
    
    const blogs = await BlogModel.findAll();
    
    response.json(blogs);

  } catch (error) {

    response.json( { 'message': error.message } );

  }
}

// Mostrar um registro
export const getBlog = async (request, response) => {
  try {
    
    const blog = await BlogModel.findAll( { where: { id: request.params.id } } );
    
    response.json(blog);

  } catch (error) {
    
    response.json( { 'message': error.message } );

  }
}


// Criar um registro
export const createBlog = async(request, response) => {
  try {
    
    await BlogModel.create(request.body);

    response.json( { 'message': 'Registro criado com sucesso!' } );

  } catch (error) {

    response.json( { 'message': error.message } );
    
  }
}

// Atualizar um registro
export const updateBlog = async(request, response) => {
  try {

    await BlogModel.update(request.body, { where: { id: request.params.id } } );

    response.json( { 'message': 'Registro atualizado com sucesso!' } );
    
  } catch (error) {
    
    response.json( { 'message': error.message } );

  }
}

// Apagar um registro
export const deleteBlog = async(request, response) => {
  try {

    BlogModel.destroy( { where: {id: request.params.id } } );

    response.json( {'message': 'Registro apagado com sucesso!'} );
    
  } catch (error) {
    
    response.json( { 'message': error.message } );

  }
}