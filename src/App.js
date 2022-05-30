import { Container } from 'react-bootstrap';
import './App.css';
import BlogLists from './Components/BlogLists';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import NewBlog from './Components/NewBlog';
import Details from './Components/Details';
import NotFound from './Components/NotFound';

function App() {

  return (
    <div className="App">
      <Container>
        <Router>
          <NavBar />
          <hr />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Navigate replace to="/blogs" />}/>
              <Route path="/blogs" element={ <BlogLists />} />
              <Route path="/addBlog" element={<NewBlog />} />
              <Route path="/blogs/:id" element={<Details />} />
            </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
