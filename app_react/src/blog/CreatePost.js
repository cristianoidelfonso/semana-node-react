import axios from 'axios';
import { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";

const URI = 'http://localhost:8000/posts/';


const CreatePost = () => {

  const { register, handleSubmit, formState: { errors } } = useForm(); 
  const onSubmit = data => {
    store(data);
  }; 


  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const navigate = useNavigate();

  const payload = {
    title: title,
    content: content,
    author: author
  }

  // save
  const store = async (event) => {
    // event.preventDefault();
    // axios.post(URI, {title: title, content: content, author: author});
    
    await axios.post(URI, payload);
    
    navigate('/');
  }

  return (
    <div className="container">
      <h1>Create new post</h1>
      <form /*onSubmit={store}*/  onSubmit={handleSubmit(onSubmit)}>
        
        <div className="form-group mb-3">
          <label className="form-label float-start">Title</label>
          <input 
            {...register("title", { required: true })}
            name="title"
            type="text" 
            className="form-control" 
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          {errors.title && <span className="text-danger float-end">This field title is required.</span>}
        </div>
        
        <div className="form-group mb-3">
          <label className="form-label float-start">Content</label>
          <textarea cols="30" rows="2"
            {...register("content", { required: true })}
            type="text" 
            className="form-control" 
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
          {errors.content && <span className="text-danger float-end">This field content is required.</span>}
        </div>
        
        <div className="form-group mb-3">
          <label className="form-label float-start">Author</label>
          <input
            {...register("author", { required: true })}
            name="author"
            type="text"
            className="form-control"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
          {errors.author && <span className="text-danger float-end">This field author is required.</span>}
        </div>
        
        <br/>

        <button type='submit' className="btn btn-sm btn-primary float-end">
          <FaSave icon="fas fa-add" style={ {marginRight:'.5rem'} }/>  
            Save
        </button>

      </form>

    </div>
  );
}

export default CreatePost;