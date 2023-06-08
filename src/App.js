// CORE
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PAGES
import { AboutMe } from './pages/AboutMe/AboutMe';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';

// COMPONENTS
import { Navbar } from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
