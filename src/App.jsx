import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner";
import About from "./component/About/About";
import Skill from "./component/Skill/Skill";
import Work from "./component/Work/Work";
import Education from "./component/Education/Education";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Work></Work>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
