import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ShowPosts from './blog/ShowPosts';
import CreatePost from './blog/CreatePost';
import EditPost from './blog/EditPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} alt="logo" className="App-logo" />
      </header>

      <Router>
        <Routes>
          <Route path='/' element={<ShowPosts />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/edit/:id' element={<EditPost />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
