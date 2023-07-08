import About from "./components/About";
import Contact from "./components/contact";

import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
// import ScrollAnimation from "./components/ScrollAnimation";
// import SlideAnimation from "./components/SlideAnimation";
import SocialLinks from "./components/SocialLinks";
import TimeLine from "./components/TimeLine";

function App() {
  return (
    <div className="" >
      
     <NavBar />
     
     <Home />
     

    
     <About />
     
    
     

     {/* <SlideAnimation> */}
     <TimeLine />
     {/* </SlideAnimation> */}

     
    
     <Portfolio />
     

     <Experience />
     <Contact />
     {/* <AstronautAnimation /> */}
    
     
     <SocialLinks />
    </div>
  );
}

export default App;
