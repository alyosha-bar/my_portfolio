import ImageSlider from "./ImageSlider";
import './projects.css'



import WorkoutBuddy from '../assets/WorkoutBuddyScreenshot.png'
import WorkoutBuddy2 from '../assets/WorkoutBuddyScreenshot2.png'
import WorkoutBuddy3 from '../assets/WorkoutBuddyScreenshot3.png'
import WorkoutBuddy4 from '../assets/WorkoutBuddyScreenshot4.png'

import School from '../assets/School.png'
import School2 from '../assets/School2.png'
import School3 from '../assets/School3.png'


const Projects = () => {

    const project1_images = [
        WorkoutBuddy,
        WorkoutBuddy2,
        WorkoutBuddy3
    ]

    const project2_images = [
        WorkoutBuddy,
        WorkoutBuddy2,
        WorkoutBuddy3,
        WorkoutBuddy4
    ]

    const project3_images = [
        School,
        School2,
        School3
    ]


    return ( 
        <div>

            <nav className="projects-nav">
                <ul>
                    <li className="project-link"><a href="#blog"> Blog Application </a></li>
                    <li className="project-link"><a href="#workout"> Workout Tracker </a></li>
                    {/* <li className="project-link"><a href=""> Freelance PR site </a></li> */}
                    <li className="project-link"><a href="#school"> School Management System </a></li>
                </ul>
            </nav>


            <ul>
                <li className="project-area">
                    <div className="text-area">
                        <h2 id="blog"> Blog Application (Personal Project) </h2>
                        <p>I made this project to practice my skills in React and Firebase. This project is on going and 
                            I am to have it deployed soon.
                            My aim when starting this project was to create a Blog Platform for my client to put their blogs on, 
                            as they previously used Facebook for that. 
                            
                            <br />
                            <br />
                            This project has some unique requirements that I needed to fulfill. For example, my client was 
                            imperitive on having each blog
                            is paired with a photo gallery. Additionally, each entry has to be able to translated
                            from Russian (original) to English. Furthermore, the website had to be able to authenticate users, allowing
                            each user a unique experience with commenting and saved posts functionality. 
                            To achieve these requirements I used React as the Frontend and Firebase to handle image file storage,
                            blog content & other information, and authentication. 
         
                        </p>
                    </div>
                    <ImageSlider className='img-slider' imgArray={project1_images}/>
                </li>
                <li className="project-area">
                    <div className="text-area">
                        <h2 id="workout"> Workout Tracker (Personal Project) </h2>
                        <p> I made this project to start learning the MERN tech-stack. I had already started with React was
                            seeking to expand my knowledge to progress to Full-Stack Development. I decided to use a NoSQL database
                            like MongoDB, as I already had experience with SQL.
                            
                            <br />
                            <br />
                            This project was a simple CRUD application, however the challenge was implementing full user authentication 
                            and authorization. Using JWT tokens. This was a huge challenge for me and still is a difficult feature to implement. 
                            This project was instrumental in teaching me how http request routes work in practice, and implementing them using express, 
                            testing using postman was a great learning experience for me.
         
                        </p>
                    </div>
                    <ImageSlider className='img-slider' imgArray={project2_images}/>
                </li>
                <li className="project-area">
                    <div className="text-area">
                        <h2 id="school"> School Management System Desktop App (School Coursework Project) </h2>
                        <p> This project was part of my coursework in my final year of high school. I made it using Java and MySql. It was an introduction
                            to Object Oriented Programming using Java and served as a foundation for my programming moving forward.
                            This project, although, not the greatest taught me a great deal on how GUIs and OOP apps are made.
                            <br />
                            <br />
                            The project was a coursework so it had requirements from the marking criteria forcing me to use best OOP practices 
                            such as Inheritence, Encapsulation, Abstraction and Polymorphism. Addtionally, it taught me the basics of GUI development, which
                            was very important as it is different to console based programmes I was building before. Furthermore, it was a first introduction to
                            SQL and databases, which are skills that I actively use to this day. 
                        </p>
                    </div>
                    <ImageSlider className='img-slider' imgArray={project3_images}/>
                </li>
            </ul>
        </div>
     );
}
 
export default Projects;