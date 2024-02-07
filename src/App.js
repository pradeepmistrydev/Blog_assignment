import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Banner from './components/Banner';
import Cards from './components/Cards';
import MoreInfo from './components/MoreInfo';
import Form from './components/Form';
import Footer from './components/Footer';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [blogs, setBlogs] = useState([]);

  function formSubmitHandler(blog) {
    setBlogs(prev => [...prev, blog]);
  }

  return (
    <Router>
      <Routes>
        <Route path='/form' element={<Form onFormSubmitHandler={formSubmitHandler} />} />
        <Route path='/' element={
          <>
            <Header />
            <Banner />
            <Cards blogs={blogs} />
            <MoreInfo />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;