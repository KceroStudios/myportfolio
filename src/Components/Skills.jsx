import Job from "./Job"
import Skill from "./Skill"
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoWordpress } from "react-icons/bi";
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiCsharp, SiJoomla } from "react-icons/si";

const Skills = () =>{
    return(
        <div className="experience">
           <h3><span>SOME</span> SKILLS</h3> 
           <div className="skills_group">
            <Skill
            icon={<BiLogoHtml5/>}
            custom_class={'html5'}
            leyenda={'HTML 5'}/>
            <Skill
            icon={<BiLogoCss3/>}
            custom_class={'css3'}
            leyenda={'css 3'}/>
            <Skill
            icon={<BiLogoJavascript/>}
            custom_class={'js'}
            leyenda={'Java Script'}/>
            <Skill
            icon={<BiLogoReact/>}
            custom_class={'react'}
            leyenda={'React JS'}/>
            <Skill
            icon={<SiCsharp/>}
            custom_class={'csharp'}
            leyenda={'C Sharp'}/>
            <Skill
            icon={<SiAdobephotoshop/>}
            custom_class={'ps'}
            leyenda={'Adobe Photoshop'}/>
            <Skill
            icon={<SiAdobeillustrator/>}
            custom_class={'ai'}
            leyenda={'Adobe Ilustrator'}/>
            <Skill
            icon={<SiAdobeindesign/>}
            custom_class={'id'}
            leyenda={'Adobe InDesign'}/>
            <Skill
            icon={<BiLogoWordpress/>}
            custom_class={'wp'}
            leyenda={'WordPress'}/> 
            <Skill
            icon={<SiJoomla/>}
            custom_class={'jla'}
            leyenda={'Jommla'}/>           
           </div>

        </div>
    )
}

export default Skills