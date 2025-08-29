import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import Academics from './pages/academics/academics';
import Experience from './pages/experience/experience';
import Projects from './pages/projects/projects';


function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <Header />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Academics" element={<Academics />} />
            <Route path="/Experience" element={<Experience />} />
            {/* <Route path="/Hobbies" element={<Hobbies />} /> */}
            <Route path='/Projects' element={<Projects />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
