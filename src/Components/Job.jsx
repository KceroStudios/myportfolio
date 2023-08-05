import { GoNoEntry, GoPlusCircle } from "react-icons/go";
import { useState, useEffect } from "react";

const Job = ({year, company, position, description, logo}) =>{
    const [bottomClose, setBottonClose] = useState('hide') 
    const [bottomOpen, setBottonOpen] = useState('show') 
    const [cardAnimation, setCardAnimation] = useState('animation_on')
    const [timer, setTimer] = useState(1)

    const btnClose= () =>{
        setBottonClose('hide')
        setBottonOpen('open')
    }
    const btnOpen= () =>{
        setBottonOpen('hide')
        setBottonClose('show')
    }
    useEffect(()=>{
        setTimeout(function(){
            setCardAnimation('')
        }, timer)    
    })

    return(
        <div className="job">
            <div class='year'><i className={cardAnimation}>{year}</i> <span className={cardAnimation}></span></div>
            <div className={`${cardAnimation} info`}>
                <div className="company">
                    <h4>{company} <span>{position}</span></h4>
                    <img src={require(`../assets/image/${logo}`)}/>
                </div>
                
                <p className= {bottomClose} >{description}</p>
                <a className= {bottomClose} onClick={btnClose}><GoNoEntry/></a>
                <a className= {bottomOpen} onClick={btnOpen}><GoPlusCircle/></a>
            </div>
        </div>
    )
}

export default Job