import './App.css';
import "./index.css";
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Home from './pages/Homepage';
import Contactme from './pages/Contactme';
import Aboutme from './pages/Aboutme';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
function App() {
  

  return (
    <>
    {/* <Typing /> */}
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <Aboutme />
        </Route>
        <Route exact path="/project">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contactme />
        </Route>
      </Routes>
    </Router>
    {/* <Hero />
    <Skill />
    <Education />
    <Contact />
    <Footer />
    <ScrollTop /> */}
    </>
  );
}

export default App;
