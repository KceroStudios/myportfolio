import TrainingCard from "./TrainingCard"
import Capacitation from "./Capacitation"
import '../assets/css/training.css'

const Training = () =>{
   return(    
      <div className="training">
         <h3><span>SOME</span> TRAINING</h3>
         <div className="training_group">
            <TrainingCard
               logo={'school_2.png'}
               title={'UDEMY'}
               location={'www.udemy.com'}>
               <Capacitation
                  date={'2023'}
                  capacitation={'C# TOTAL'}
                  details={'Advanced Professional Training. Real-World Projects. Game Development with Unity.'}
               />
               <Capacitation
                  date={'2023'}
                  capacitation={'React PRO ( update )'}
                  details={'Elevate Your Foundations to the Next Level.'}
               />
               <Capacitation
                  date={'2023'}
                  capacitation={'UX Design ( update )'}
                  details={'User Experience UX/UI + Figma 2023.'}
               />
               <Capacitation
                  date={'2022'}
                  capacitation={'React'}
                  details={'Ultimate Guide: Hooks, Router, Redux, Next + Projects'}
               />
               <Capacitation
                  date={'2022'}
                  capacitation={'JavaScript'}
                  details={'Modern JavaScript Mastery: A Guide to Mastering the Language'}
               />
            </TrainingCard>

            <TrainingCard
               logo={'school_3.png'}
               title={'FREECODECAMP'}
               location={'@freecodecampespanol'}>
               <Capacitation
                  capacitation={'React'}
                  date={'2022'}
                  details={'Learn React from Scratch - React Course with Projects'}
               />
            </TrainingCard>

            <TrainingCard
               logo={'school_4.png'}
               title={'DOMESTIKA'}
               location={'domestika.org'}>
               <Capacitation
                  capacitation={'WordPress'}
                  date={'2021'}
                  details={'Creating a professional website using WordPress'}
               />
               <Capacitation
                  capacitation={'SEO'}
                  date={'2021'}
                  details={'Basic principles of SEO'}
               />
               <Capacitation
                  capacitation={'Identity Corporate'}
                  date={'2020'}
                  details={'Development of a corporate identity manual'}
               />
            </TrainingCard>

            <TrainingCard
               logo={'school_8.png'}
               title={'YOUTUBE'}
               location={'Santo Domingo, Rep. Dom.'}>
                  <Capacitation
                  capacitation={'Git'}
                  date={'2020'}
                  details={'Learn GIT Now! Complete FREE Course from Scratch'}
                  />
                  <Capacitation
                  capacitation={'WordPress Themes'}
                  date={'2019'}
                  details={'HTML and Bootstrap 4 Layout - Create Your Own WordPress Themes'}
                  />

                  <Capacitation
                  capacitation={'HTML5 - CSS3 - Boostrap'}
                  date={'2014'}
                  details={'CSS3 and HTML5: What They Bring'}
                  />
               </TrainingCard>

               <TrainingCard
               logo={'school_5.png'}
               title={'SDQ Training Center'}
               location={'Santo Domingo, Rep. Dom.'}>
                  <Capacitation
                  capacitation={'PHP'}
                  date={'2011'}
                  details={'Introduction to PHP and MySQL'}
                  />
                  <Capacitation
                  capacitation={'JQuery'}
                  date={'2012'}
                  details={'jQuery from Zero to Expert'}
                  />
               </TrainingCard>

            <TrainingCard
                logo={'school_6.png'}
                title={'Instituto Tecnológico Las Américas'}
                location={'Santo Domingo, Rep. Dom.'}>
                   <Capacitation
                    capacitation={'Animation'}
                    date={'2010'}
                    details={'Basic Animation with Flash and ActionScript'}
                   />
                </TrainingCard>

                <TrainingCard
                logo={'school_1.png'}
                title={'Universidad Autónoma de Santo Domingo ( UASD )'}
                location={'Santo Domingo, Rep. Dom.'}>
                   <Capacitation
                    capacitation={'Graphic Design'}
                    date={'2007'}
                    details={'Bachelors Degree Graphic Design'}
                   />
                </TrainingCard>

                <TrainingCard
                logo={'school_7.png'}
                title={'Centro Tecnologico Universal'}
                location={'Santo Domingo, Rep. Dom.'}>
                   <Capacitation
                    capacitation={'Web Design'}
                    date={'2004'}
                    details={'Web Page Design Technician'}
                   />
                   <Capacitation
                    capacitation={'Graphic Design'}
                    date={'2003'}
                    details={'Graphic Design Technician. Adobe and Macromedia Software Suites'}
                   />
                    <Capacitation
                    capacitation={'Hardware Technician'}
                    date={'2002'}
                    details={'Computer Assembly, Maintenance, and Repair'}
                   />
                </TrainingCard>



                

                

                

               

                
            </div>       

        </div>   
    )
}

export default Training