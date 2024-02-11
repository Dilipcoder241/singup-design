import React from 'react'
import Landing from './Components/Landing';
import Login from './Components/Login';
import Singup from './Components/Singup';
import Account from './Components/Account';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App