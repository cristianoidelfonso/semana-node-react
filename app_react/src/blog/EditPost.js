import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaSave } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/posts/';

const EditPost = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (event) => {

    event.preventDefault();

    await axios.put( URI + id, {
      title: title,
      content: content,
      author: author
    });

    navigate('/');
    
  }

  useEffect( () => {
    getPostById();
  })  


  const getPostById = async () => {

    const response = await axios.get( URI + id );

    setTitle(response.data[0].title);
    setContent(response.data[0].content);
    setAuthor(response.data[0].author);
  }

  return(
    <div className="container">
      <h1>Edit Post</h1>
      <form onSubmit={update}>

        <div className="form-group mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title??''}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Content</label>
          <textarea
            type="text"
            className="form-control"
            value={content??''}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            value={author??''}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>

        <button type='submit' className="btn btn-sm btn-primary float-end">
          <FaSave icon="fas fa-add" style={{ margiRight: '.5rem' }} />
          Store
        </button>

      </form>

    </div>
  );
}

export default EditPost;