import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import SearchPage from './components/SearchPage/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />
          <Route path="/app/product/:productId" element={<DetailsPage/>} />
          <Route path="/app/search" element={<SearchPage/>} />
        </Routes>
        </>
  );
}

export default App;
