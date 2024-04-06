import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ScrollToTopFn from './components/ScrollToTopFn';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe /> 
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
 .    <ScrollToTopFn/>
    </div>
  );
}

// 

export default App;
