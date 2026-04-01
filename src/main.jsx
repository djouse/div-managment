import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Exercise1 from "./pages/Exercises/Exercise1/";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/ex1" element={<Exercise1 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
