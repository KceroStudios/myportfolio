import { useEffect, useState } from 'react';


const ProfessionalAreas = () => {
    const [progress, setProgress] = useState('pp') 
    useEffect(() => {
        // Código que deseas ejecutar cuando la página se carga
        setProgress('')
      }, []);
    return(
        <>
            <div class='resume'>
                <p  className={`${progress}`}><i> With over 12 years of expertise in graphic design and frontend development, 
                        I bring creativity, proactivity, and a consistent drive to learn and adopt new technologies and tools.
                        My dedication to staying updated enhances my efficiency every day, ensuring that I deliver high-quality results.</i>
                </p>
            </div>
            <div class='areas'>
                <div className="numbers">
                    <ul>
                        <li>10 </li>
                        <li>20 </li>
                        <li>30 </li>
                        <li>40 </li>
                        <li>50 </li>
                        <li>60 </li>
                        <li>70 </li>
                        <li>80 </li>
                        <li>90 </li>
                        <li>100 </li>
                    </ul>
                    <div class='line'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        
                    </div>
                </div>
                <ul className="progress">
                    <li className={`${progress} p1`}>Design</li>
                    <li className={`${progress} p2`}>FronEnd Dev</li>
                    <li className={`${progress} p3`}>BackEnd Dev</li>
                    <li className={`${progress} p4`}>Ilustration</li>
                    <li className={`${progress} p5`}>Narrative</li>
                </ul>
            </div>
        </>
    )
}

export default ProfessionalAreas