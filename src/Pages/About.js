import Navbar from "./Navbar";
import './About.css'
const About=()=>
{
return(
    <>
    <Navbar></Navbar>
    <div className="aboutlayout">
    <div className="infodiv">
            <h1 className='infop'>Welcome to Enovate, a leading e-learning company dedicated to revolutionizing education in the digital age. With our innovative approach and state-of-the-art technology, we are redefining how people learn, grow, and thrive in an ever-changing world.</h1>

            <p className='infop'>At Enovate, we believe that education should be accessible to all, regardless of geographical location or socioeconomic background. Our mission is to break down barriers and empower individuals of all ages to unlock their full potential through flexible, engaging, and personalized online learning experiences.</p>

            <p className='infop'> That's why we foster a vibrant online community where learners can connect, interact, and learn from one another. Engage in discussions, participate in group projects, and tap into the collective wisdom of a global learning network. Join us on this transformative e-learning journey and unlock a world of endless possibilities. Together, let's shape the future of education.</p>
        </div>
        </div>
    </>
)
}

export default About;