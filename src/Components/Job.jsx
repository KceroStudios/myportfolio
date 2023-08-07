import { GoNoEntry, GoPlusCircle } from "react-icons/go";
import { useState} from "react";
import VisibleAnimate from "./VisibleAnimate";

const Job = ({year, company, position, description, logo}) =>{
    const [bottomClose, setBottonClose] = useState('hide') 
    const [bottomOpen, setBottonOpen] = useState('show') 
  
    const btnClose= () =>{
        setBottonClose('hide')
        setBottonOpen('open')
    }
    const btnOpen= () =>{
        setBottonOpen('hide')
        setBottonClose('show')
    }
  
    return(
        <VisibleAnimate>      
            <div class='year'><i>{year}</i> <span></span></div>
            <div className= 'info'>
                <div className="company">
                    <h4>{company} <span>{position}</span></h4>
                    <img src={require(`../assets/image/${logo}`)}/>
                </div>
                
                <p className= {bottomClose} >{description}</p>
                <a className= {bottomClose} onClick={btnClose}><GoNoEntry/></a>
                <a className= {bottomOpen} onClick={btnOpen}><GoPlusCircle/></a>
        </div>
        </VisibleAnimate>
    )
}

export default Job