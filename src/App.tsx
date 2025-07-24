import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import Research from './pages/publications/publications';
import Footer from './components/footer/footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Research" element={<Research />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
