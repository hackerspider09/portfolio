import './App.css';
import Skill from "./components/Skill"
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Typing from './components/Typing_animation';
import Hero from './components/Hero';
import ScrollTop from "./components/Scrolltotop"
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    {/* <Typing /> */}
    <Navbar />
    {/* <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/skills" element={<Skill />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> */}
    <Hero />
    <Skill />
    <Education />
    <Contact />
    <Footer />
    <ScrollTop />
    </>
  );
}

export default App;
