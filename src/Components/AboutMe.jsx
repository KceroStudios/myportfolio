import '../assets/css/about_me.css'
import ProfessionalAreas from "./ProfessionalAreas"
import Experience from './Experince'
import Skills from './Skills'
import Training from './Training'

const AboutMe = () =>{
    return(
        <div id="me">
           <div className="container">
                <ProfessionalAreas/>
                <Experience/>
                <Skills />
           </div>
           <div className="fluid_container">
            <div className="container">
                <Training/>
            </div>
           </div>

           
        </div>
    )
}

export default AboutMe