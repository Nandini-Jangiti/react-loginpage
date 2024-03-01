import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/welcome" element={<Welcome />} />

    </Routes>

  );
};

export default App;
