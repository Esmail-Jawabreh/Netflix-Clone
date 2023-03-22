import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../src/components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from '../src/components/Home/Home';
import FavList from '../src/components/FavList/FavList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/FavList" element={<FavList />}></Route>
      </Routes>

      <Footer />
      
    </div>
  )
}

export default App;

