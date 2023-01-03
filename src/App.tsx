import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './Layout';
import Classrooms from './pages/Classrooms';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Classrooms />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
