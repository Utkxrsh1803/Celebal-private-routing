import Navbar from "./Navbar";
import './Home.css';
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate('/course');
    }
    return (
        <div className="homedivc">
            <Navbar></Navbar>
            <div className="content">
                <div className="fbox">
                    <div className="upgrade">Upgrade your skills with us</div>
                    <div className="unlock">Unlock the power of the web and embark on an exciting journey into the world of web development. Whether you're a beginner or an experienced programmer looking to expand your skill set, our comprehensive courses and resources are designed to meet your needs and guide you towards success.
                    </div>
                    <div className="ready">Ready to take the first step towards becoming a skilled web developer? Explore our course catalog, choose your path, and unlock a world of endless possibilities. Join us at and unleash your creativity to build innovative and impactful web solutions.</div>
                </div>
              
            </div>
            <button className="explorebutton" onClick={navigateHandler}>Explore</button>
        </div>
    )
};

export default Home;