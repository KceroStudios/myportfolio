import { Children } from "react"
import VisibleAnimate from "./VisibleAnimate"
const TrainingCard = ({logo, title, location, children}) =>{
    return(
        <VisibleAnimate>
            <div className="training_card">
                <div className="school">
                    <img src={require(`../assets/image/${logo}`)}/>
                    <h2>{title}</h2>                 
                    <span>{location}</span>
                    {children}
                </div>
                
            </div>
        </VisibleAnimate>
    )
}

export default TrainingCard