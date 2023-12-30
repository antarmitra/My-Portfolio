// import Banner from "./Component/Banner/Banner"
import AboutMe from "./Component/AboutMe/AboutMe"
import Banner from "./Component/Banner/Banner"
import ContactMe from "./Component/ContactMe/ContactMe"
import Educaton from "./Component/Education/Educaton"
import Footer from "./Component/Footer/Footer"
import MySkill from "./Component/MySkill/MySkill"
import MyWork from "./Component/MyWork/MyWork"
import Navbar from "./Component/Navbar/Navbar"
import AnimatedCursor from "react-animated-cursor"
import Project from "./Component/Project/Project"


function App() {


  return (
    <>
      <div className="App">
        <AnimatedCursor
          innerSize={8}
          outerSize={15}
          color='247, 80, 35'
          outerAlpha={0.5}
          innerScale={0.7}
          outerScale={5}
        />
      </div>

      <div className="max-w-screen-2xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <div className="max-w-screen-2xl mx-auto">
        <AboutMe></AboutMe>
      </div>

      <MySkill></MySkill>
      <Educaton></Educaton>
      <Project></Project>
      <div  className='max-w-6xl mx-auto -mt-28'>
        <MyWork></MyWork>
      </div>
      <ContactMe></ContactMe>
      <Footer></Footer>

    </>
  )
}

export default App
