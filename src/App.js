import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signin from './components/Authentication/Signin';
import SubCategory from './components/Admin/SubCategory';
import ForgotPassword from './components/Authentication/ForgotPassword';
import Dashboard from './components/User/Dashboard';

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Signin />} />
          <Route exact path='/sub-category' element={<SubCategory />} /> 
          <Route exact path='/retreiveLogin' element={<ForgotPassword />} /> 
          <Route exact path='/dashboard' element={<Dashboard />} /> 
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
