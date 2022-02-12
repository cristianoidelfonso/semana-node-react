import axios from 'axios';
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/posts/';

const ShowPosts = () => {

  const [posts, setPosts] = useState([]);

  useEffect( () => {

    getPosts();
  
  },[]);

  const getPosts = async () => {

    const response = await axios.get(URI);
     
    setPosts(response.data);

  }

  const deletePost = async (id) => {
    
    await axios.delete(`${URI}/${id}`);

    getPosts();
  
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to={'/create'} className="btn btn-sm btn-success my-2 float-end">
            <FaPlus icon="fas fa-plus" style={{marginRight:'.5rem'}} />
              New Post
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr key="">
                <th>ID</th>
                <th>TITLE</th>
                <th>CONTENT</th>
                <th>AUTHOR</th>
                <th colSpan={2}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              { posts.map( post => (
                  <tr key={ post.id }>
                    <td>{ post.id }</td>
                    <td>{ post.title }</td>
                    <td>{ post.content }</td>
                    <td>{ post.author }</td>
                    <td>
                      <Link to={`/edit/${post.id}`} className="btn btn-sm btn-info">
                        <FaEdit icon="fa-solid fa-pen-to-square" style={{ marginRight: '.5rem' }} />
                          Editar
                      </Link>
                    </td>
                    <td>
                      <button onClick={ () => deletePost(post.id) } className="btn btn-sm btn-danger">
                        <FaTrash icon="fa-light fa-trash-can" style={{ marginRight: '.5rem' }}/>
                          Delete
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

}

export default ShowPosts;