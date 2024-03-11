import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './Layout'
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Properties from './components/Properties/Properties';

const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/properties' element={<Properties/>} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Root />
)
