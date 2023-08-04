import { useState } from "react";
import '../assets/css/main_menu.css'
import { GoKebabHorizontal, GoHome } from "react-icons/go";

const MainMenu = () => {
    const [showHide, setShowHide] = useState ('hide')
    const showHideOnClick = () =>{
    setShowHide(showHide == 'show' ? 'hide' : 'show' )
    } 
    const [current, setCurrent] = useState ('')
    const currentOnClick = (id) => {
        setCurrent(id);
      }
    return (
        <nav class="navbar">
            <div class="container">
                <div class='show-mobile menu-sandwish' onClick={showHideOnClick}>
                    <GoKebabHorizontal className="sandwish"/>
                </div>
                <div className={`${showHide}`} >
                    <ul class="navbar-nav" >
                        <li className={current === 'about' ? 'current' : ''}>
                            <a onClick={() => currentOnClick('about')} href="#">
                                <GoHome /> About Me
                            </a>
      </li>
      <li className={current === 'services' ? 'current' : ''}>
        <a onClick={() => currentOnClick('services')} href="#">
          <GoHome /> Services
        </a>
      </li>


                        

                    </ul> 
                </div>
            </div>
        </nav>    
    );
}

export default MainMenu