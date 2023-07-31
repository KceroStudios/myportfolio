import '../assets/css/header.css'

const Header = ({position}) => {
    return(
        <header >     
            <div class='container'>
                <div class='header-info'>
                    <h1>Edison Gomez Jose</h1>
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
