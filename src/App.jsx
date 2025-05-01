import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App()
{
  return(
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </Router>
  );

}

export default App;