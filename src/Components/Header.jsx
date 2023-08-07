import '../assets/css/header.css'
import { GoMail } from "react-icons/go";
import { BiPhoneCall, BiLogoGithub, BiLogoLinkedinSquare, BiLogoInstagramAlt } from "react-icons/bi";

const Header = ({position}) => {
    return(
        <header >     
            <div class='container'>
                <div class='header-info'>
                    <h1>Edison Gomez Jose</h1>
                    <h2> kcerostudios@gmail.com <GoMail/></h2>
                    <h2>( 201 ) 362 5030 <BiPhoneCall/></h2>
                    <ul>
                        <li><a><BiLogoGithub/></a></li>
                        <li><a><BiLogoLinkedinSquare/></a></li>
                        <li><a><BiLogoInstagramAlt/></a></li>
                    </ul>
                </div>
                <div class='photo'>
                    <div className="circle">
                        <div className= {  `${position} photo-1`} >  </div>          
                    </div>  
               </div>
               <div class='header-info-2'>
                    <h2>Graphic Designer - FrontEnd Developer</h2>
                    <h2>Ilustrator - Writer</h2>
               </div>

            </div>
        </header>
    )
}

export default Header
