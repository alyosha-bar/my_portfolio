import { Link } from "react-router-dom";
import './home.scss';
import { useEffect, useState } from "react";
import AnimatedLetters from "./AnimatedLetters/index";

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'A', 'l', 'e', 'k', 's', 'e', 'j', ' ','B', 'a', 'r', 'y', 's', 'n', 'i', 'k', 'o', 'v']
    const jobArray = ['a', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']


    useEffect( () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])


    return ( 
        <div className="whole-home-page">
            <div className="home-page">
                <div className="text-zone">
                    <h1> 
                        <span className={letterClass}>H</span> 
                        <span className={`${letterClass} _12`}>i,</span> 
                        <br />
                        <span className={`${letterClass} _13`}>I</span> 
                        <span className={`${letterClass} _14`}>'m</span>   
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={nameArray} 
                            idx={15}
                        />
                        <br /> 
                        <AnimatedLetters
                            letterClass={letterClass} 
                            strArray={jobArray}
                            idx={23}
                        />
                    </h1>
                    <h2> Web Developer / Java / SQL / Python</h2>
                    <Link to="/contact" className="flat-button"> CONTACT ME </Link>
                </div>
                {/* <Logo /> */}
            </div>
        </div>
     );
}
 
export default Home;