import React from 'react';
import { InView } from "react-intersection-observer"
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ScrollToTopFn from './components/ScrollToTopFn';
import Blog from './components/Blog';


function App() {

const [active, setActive] = React.useState("aboutme")

  const sections = [
  {
    sectionArt: AboutMe,
    id: "aboutme",
  },
  {
    sectionArt: Skills,
    id: "skills",
  },
  {
    sectionArt: Projects,
    id: "projects",
  },
  {
    sectionArt: Blog,
    id:  "blogs",
  },
  {
    sectionArt: ContactMe,
    id: "contact"
  }
]

const navItem = [{
  href: "aboutme",
  ariaLabel:"Go to about me",
  link: "About me"
},
{
  href: "skills",
  ariaLabel:"Go to skills",
  link: "Skills"
},
{
  href: "projects",
  ariaLabel:"Go to projects",
  link: "Projects"
},
{
  href: "blogs",
  ariaLabel:"Go to blogs",
  link: "Blogs"
},
{
  href: "contact",
  ariaLabel:"Go to contact",
  link: "Contact"
},
]

  return (
    <div className="App">
      <NavBar>
         {(navMenuRef, hideNavMenu)=> (
         <>
          <ul ref={navMenuRef} className="nav-menu">
            {navItem.map((v, i)=> {
              return (<li key={i} className="nav-item">
                <a href={`#${v.href}`} data-active={v.href === active ? "true" : "false"} className="nav-link" onClick={hideNavMenu} name={v.href} >{v.link}</a>
              </li>)
            })}
          </ul>
         </>
         )}
      </NavBar>
      <Home />
       {sections.map((sections, i)=> {
         
         return (
         <InView threshold={0.2} onChange={(inView, entry)=> {
          if(inView) {
            const test = navItem.map((s, f) => {
                if(entry.target.id.toLocaleLowerCase() === s.href) {
                   setActive(entry.target.id.toLocaleLowerCase())
                }
            })
            return test
          }
         }}>
             {({ref}) => {
                return (
                  <div className="info" ref={ref} id={sections.id} >
                     {<sections.sectionArt/>}
                  </div>
                )
             }}
         </InView>
         )
       })}
       <ScrollToTopFn/>
      <Footer />
    </div>
  );
}

// 

export default App;
