import './App.css';
import Header from './Pages/Header/Header';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
