import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Componets /home'
import About from './Componets /About';
import Menu from './Componets /Menu';
import Review from './Componets /Review';
import Contact from './Componets /Contact';
import { ThemeProvider } from './Componets /ThemeContext';

import './App.css';

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
