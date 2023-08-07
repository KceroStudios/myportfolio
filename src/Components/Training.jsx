import TrainingCard from "./TrainingCard"
import Capacitation from "./Capacitation"
const Training = () =>{
    return(    
        <div className="training">
            <h3><span>SOME</span> TRAINING</h3>
            <div className="training_group">
                <TrainingCard
                logo={'job1.png'}
                title={'Universidad Autónoma de Santo Domingo'}
                location={'Santo Domingo, R.D.'}>
                   <Capacitation
                    capacitation={'hola que lo que'}
                   />
                </TrainingCard>
            </div>       

        </div>   
    )
}

export default Training