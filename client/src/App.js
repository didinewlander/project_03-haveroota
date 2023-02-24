import './App.css';
import Navbar from "./components/navbar/Navbar"
import Home from "./components/views/Home"
import List from "./components/views/List"
import Contact from "./components/views/Contact"
import Support from "./components/views/Support"
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/List" element={<List/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Support" element={<Support/>}/>

        </Routes>
      </div>

    </>
  );
}

export default App;
