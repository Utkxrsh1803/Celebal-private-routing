import Navbar from "./Navbar";
import './Course.css';
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
const Course = () => {

    const navigate = useNavigate();

    const htmlpageHandler = () => {
        navigate('/html')
    }
    const csspageHandler = () => {
        navigate('/css')
    }
    const jspageHandler = () => {
        navigate('/js')
    }
    const reactpageHandler = () => {
        navigate('/react')
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="topicdiv">
                <Card>
                    <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600" height="150px" width="200px"></img>
                    <p className="p2">A markup language used for creating web pages and structuring their content.</p>
                    <button className="Loginbutton" onClick={htmlpageHandler}>Learn HTML</button>
                </Card>
                <Card>
                    <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height="150px" width="200px"></img>
                    <p className="p2">CSS is a styling language used to enhance the appearance of HTML elements.</p>
                    <button className="Loginbutton" onClick={csspageHandler}>Learn CSS</button>
                </Card>
                <Card>
                    <img src="https://images.pexels.com/photos/16592498/pexels-photo-16592498/free-photo-of-software-source-code-program-code-code-on-a-computer-screen-the-developer-is-working-on-program-codes-in-the-office-photo-with-source-code.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height="150px" width="200px"></img>
                    <p className="p2">A versatile programming language that adds interactivity and dynamic functionality to web pages.</p>
                    <button className="Loginbutton" onClick={jspageHandler}>Learn JS</button>
                </Card>
                <Card>
                    <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height="150px" width="200px"></img>
                    <p className="p2">A JavaScript library for building user interfaces in a component-based approach.</p>
                    <button className="Loginbutton" onClick={reactpageHandler}>Learn React</button>
                </Card>

            </div>
        </>
    )
}

export default Course;