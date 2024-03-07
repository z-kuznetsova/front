// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Menu from './Sidebar';
import Content from './Content';
import Auth from './Auth';

const App = () => {
  return (
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route path="/lab1" element={<Auth><Content lab="Lab 1" /></Auth>} />
        <Route path="/lab2" element={<Content lab="Lab 2" />} />
        <Route path="/lab3" element={<Content lab="Lab 3" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
