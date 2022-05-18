import './App.css';
import Header from './Pages/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import AddTusk from './Pages/Home/AddTusk.js';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="addTusk" element={<RequireAuth><AddTusk /></RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
