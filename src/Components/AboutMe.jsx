import '../assets/css/about_me.css'
import ProfessionalAreas from "./ProfessionalAreas"

const AboutMe = () =>{
    return(
        <div id="me" class="container">
            <div className="description">
                <ProfessionalAreas/>
            </div>
        </div>
    )
}

export default AboutMe