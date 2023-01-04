import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Classrooms from './pages/Classrooms';
import Classroom from './pages/Classroom';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Classrooms />} />
        <Route path='/classrooms/:id' element={<Classroom />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
