import Navbar from '../Pages/Navbar';
import {CodeSection} from "react-code-section-lib";
import './Reactpage.css';
const Reactpage = () => {
    const value = 
    `import React from 'react';
    import ReactDOM from 'react-dom';
    
    class HelloWorld extends React.Component {
      render() {
        return <h1>Hello, React!</h1>;
      }
    }
    
    ReactDOM.render(<HelloWorld />, document.getElementById('root'));
    
    `
    return (
        <><Navbar />
            <div className="topicdiv">
               
               
                <div className="mainhtmldiv">
                <h1 className="topic">React JS</h1>

                <div className="heading">
                <h3>What is React JS?</h3>
                <p>React.js, often referred to as React, is an open-source JavaScript library developed by Facebook. It is widely used for building user interfaces (UIs) for web applications. React follows a component-based approach, allowing developers to create reusable UI components that can be composed together to build complex user interfaces.</p>
                <p>React utilizes a virtual DOM (Document Object Model) to efficiently update and render components. Instead of updating the entire HTML document, React only updates the specific components that have changed, resulting in improved performance and a smoother user experience.</p>
                <p>React has a vibrant ecosystem and is often used in combination with other libraries and frameworks to build complete web applications. It has gained popularity due to its efficiency, flexibility, and developer-friendly nature, making it a popular choice for building modern web interfaces and applications.</p>
                </div>

                <div className="video">
                <h3>To learn More about html play the video</h3>
                
                <iframe width="80%" height="400" src="https://www.youtube.com/embed/JPT3bFIwJYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h3>We hope this video provide you all the necessary information</h3>
                </div>

                <div className="code">
                <h2>React JS example:</h2>
                <p>Here's a basic React JS code template:</p>
                <CodeSection theme='dark' showLineNumbers='true'>{value}</CodeSection>
                </div>

            </div>
        </div>
    </>
    )
}

export default Reactpage;        