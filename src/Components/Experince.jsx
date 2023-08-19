import Job from "./Job"

const Experience = () =>{
    return(
        <div className="experience">
           <h3><span>PROFESSIONAL</span> EXPERIENCE</h3> 
           <div className="job_group">
                <Job 
                    year={'2021'}
                    company={'CAASD'}
                    position={'Web Disigner'}
                    description={'Working together with the development team, I design and program templates for different systems and web applications.'}
                    logo={'job1.png'}
                />
                <Job 
                    year={'2019'}
                    company={'Angloamericana'}
                    position={'Community Manager'}
                    description={'As a graphic and web designer, I was in charge of keeping both the company`s website and social media platforms up to date.'}
                    logo={'job2.png'}
                />
                <Job 
                    year={'2018'}
                    company={'ClickSolutions'}
                    position={'Graphic - Web Disigner'}
                    description={'Among my responsibilities, I took charge of designing and developing the company`s and clients` web portals.'}
                    logo={'job3.png'}
                />
                <Job 
                    year={'2013'}
                    company={'Yellow Page'}
                    position={'Web Disigner'}
                    description={'Creation of websites and microsites for various clients of (Caribe Servicios de Información Dominicana) and Axexa Puerto Rico.'}
                    logo={'job4.png'}
                />
                <Job 
                    year={'2021'}
                    company={'CAASD'}
                    position={'Web Disigner'}
                    description={'Working together with the development team, I design and program templates for different systems and web applications.'}
                    logo={'job1.png'}
                />
                <Job 
                    year={'2007'}
                    company={'KceroStudios'}
                    position={'Personal Endeavor'}
                    description={'In this personal endeavor, I embarked on a journey exploring the realms of graphic design, airbrushing, and printing. Presently, I leverage these skills for personal projects, including book design and more.'}
                    logo={'job5.png'}
                />
           </div>

        </div>
    )
}

export default Experience