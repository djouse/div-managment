import { Routes, Route } from 'react-router';

import Home from "./pages/Home/";
import Exercise1 from "./pages/Exercises/Exercise1/";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ex1" element={<Exercise1 />} /> 
    </Routes>
  );
};

export default Router;