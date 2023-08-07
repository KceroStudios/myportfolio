import '../assets/css/about_me.css'
import ProfessionalAreas from "./ProfessionalAreas"
import Experience from './Experince'
import Skills from './Skills'
import Training from './Training'

const AboutMe = () =>{
    return(
        <div id="me" class="container">
           
                <ProfessionalAreas/>
                <Experience/>
                <Skills />
                <Training/>

           
        </div>
    )
}

export default AboutMe