import VisibleAnimate from "./VisibleAnimate";
import { GoTriangleLeft } from "react-icons/go";
import { useState } from "react";

const Skill = ({icon, custom_class, leyenda}) =>{
    const [showLegend, setShowLeyend] = useState('hide_legend')
    const handleMouseOver = () =>{
        setShowLeyend( 'show_legend' )
    }

    const handleMouseOut = () =>{
        setShowLeyend( 'hide_legend' )
    }
    return (
        <VisibleAnimate>
            <div className={`${custom_class} skill`}>
                <div className={`${showLegend} legend`}>
                    <GoTriangleLeft/>
                    <span>{leyenda}</span>
                </div>

                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    {icon}
                </div>

                <div class='skill_progress'>
                    <span class='progress_bar'></span>
                </div>
            </div>
        </VisibleAnimate>
    )
}

export default Skill