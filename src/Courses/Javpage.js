import Navbar from '../Pages/Navbar';
import {CodeSection} from "react-code-section-lib";
import './Javpage.css';
const Javpage = () => {
    const value = 
    `// Prompt the user to enter their name
    var name = prompt("Please enter your name:");
    
    // Check if the name is not empty
    if (name) {
      // Display a personalized greeting
      var greeting = "Hello, " + name + "! Welcome to our website.";
      console.log(greeting);
    } else {
      // Display a generic greeting
      console.log("Hello, visitor! Welcome to our website.");
    }
    `
    return (
        <><Navbar />
            <div className="topicdiv">
               
               
                <div className="mainhtmldiv">
                <h1 className="topic">JavaScript</h1>

                <div className="heading">
                <h3>What is JavaScript?</h3>
                <p>JavaScript is a high-level programming language primarily used for web development. It was designed to add interactivity, dynamic behavior, and functionality to web pages. JavaScript allows developers to manipulate and modify HTML elements, handle events, interact with APIs and databases, perform calculations, create animations, and much more.</p>
                <p>JavaScript is a versatile language that runs on the client-side (in the web browser) as well as on the server-side (with the help of platforms like Node.js). It is known for its flexibility and wide range of capabilities, making it a popular choice for building interactive web applications, single-page applications (SPAs), mobile apps, and even desktop applications.</p>
                <p>Overall, JavaScript plays a critical role in modern web development, enabling enhanced user experiences, dynamic content generation, and advanced application functionality. It is a powerful and essential language for building interactive and responsive web applications.</p>
                </div>

                <div className="video">
                <h3>To learn More about html play the video</h3>
                
                <iframe width="80%" height="400" src="https://www.youtube.com/embed/AgrWeFJWRTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h3>We hope this video provide you all the necessary information</h3>
                </div>

                <div className="code">
                <h2>JavaScript example:</h2>
                <p>Here's a basic JavaScript code template:</p>
                <CodeSection theme='dark' showLineNumbers='true'>{value}</CodeSection>
                </div>

            </div>
        </div>
    </>
    )
}

export default Javpage;        