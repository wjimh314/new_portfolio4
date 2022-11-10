import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
//  import Particles from "react-tsparticles";
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Languages from './components/Languages';
import Resume from './components/Resume';
 import Portfolio from './components/Portfolio';
 import Footer from './components/Footer'
function App() {
  return(
  <>
  {/* {<Particles
    params={{
      particles:{
        number:{
          value:30,
          density:{
            enable:true,
            value_area:900
          }
        }
      }
    }}
  /> } */}
  
  <Navbar />
   <Header />
   <AboutMe/>
   <Languages/>
   <Resume/>
    <Portfolio/>  
    <Footer/>

   </>
  );
}

export default App;
