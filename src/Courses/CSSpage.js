import Navbar from '../Pages/Navbar';
import {CodeSection} from "react-code-section-lib";
import './CSSpage.css';
const CSSpage = () => {
    const value = 
    `/* Select the <h1> element and set its color to blue */
    h1 {
      color: blue;
    }
    
    /* Select all <p> elements and set their font size to 16 pixels */
    p {
      font-size: 16px;
    }
    
    /* Select the element with ID "myDiv" and set its background color to light gray */
    #myDiv {
      background-color: lightgray;
    }
    
    /* Select all elements with the class "highlight" and set their background color to yellow */
    .highlight {
      background-color: yellow;
    }
    
    /* Select all <a> elements on hover and change their text color to red */
    a:hover {
      color: red;
    }
    `
    return (
        <><Navbar />
            <div className="topicdiv">
               
               
                <div className="mainhtmldiv">
                <h1 className="topic">CSS</h1>

                <div className="heading">
                <h3>What is CSS?</h3>
                <p>CSS stands for Cascading Style Sheets. It is a styling language used to describe the presentation and visual appearance of HTML elements on a web page. CSS provides a set of rules and properties that define how elements should be displayed, including their layout, colors, fonts, spacing, and more.By using CSS, web developers can separate the structure (defined with HTML) from the visual style (defined with CSS) of a web page. This separation allows for easier maintenance, consistency across multiple pages, and greater control over the design and layout of a website.</p>
                <p>CSS follows a cascading nature, where multiple styles can be applied to an element, and conflicts are resolved based on specificity, inheritance, and the order of the stylesheets.Overall, CSS plays a crucial role in enhancing the visual appeal and user experience of web pages, making them more engaging, attractive, and user-friendly.</p>
                </div>

                <div className="video">
                <h3>To learn More about html play the video</h3>
                
                <iframe width="80%" height="400" src="https://www.youtube.com/embed/ua3Y-X6-WQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h3>We hope this video provide you all the necessary information</h3>
                </div>

                <div className="code">
                <h2>CSS example:</h2>
                <p>Here's a basic CSS code template:</p>
                <CodeSection theme='dark' showLineNumbers='true' lang='CSS'>{value}</CodeSection>
                </div>

            </div>
        </div>
    </>
    )
}

export default CSSpage;        