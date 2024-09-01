import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
