import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import './i18n.ts'
//import Blog from './routes/Blog/index.tsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
