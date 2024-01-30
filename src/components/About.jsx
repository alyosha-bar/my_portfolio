import './about.css'
import ME from '../assets/images/ME.jpg'
import ME2 from '../assets/ME2.jpg'
import ME3 from '../assets/ME3.jpg'
import ImageSlider from './ImageSlider'

const About = () => {

    const me = [
        ME,
        ME2,
        ME3
    ]

    return ( 
        <>
            
            
            <div className="side-text-area"> 
                <div className='text-area'>
                    <h1 className="title"> About Me </h1>
                    <p> As a second-year computer science student, I'm actively seeking opportunities 
                        to apply my programming skills and passion for software engineering in real-world 
                        context. I have experience in Web Development, speficially with React and the MERN stack, or Firebase. 
                        Addiotionally, I am proficient in Java, I bring a strong foundation in data 
                        structures and algorithms and a working understanding of Python. I am also experienced with SQL, both SQLite
                        and MySQL.
                    </p>
                    <p>
                        I am eager to contribute, learn, and gain practical experience in a professional setting, through Freelance
                        projects, part-time work in term-time and full-time positions in the Summer. I am incredibly passionate about
                        always learning new concepts and technologies; and I am always willing to expand my depth of knowledge.
                    </p>
                </div>
                <div className="img-slider">
                    <ImageSlider imgArray={me}/>
                </div>
            </div>
        </>
     );
}
 
export default About;