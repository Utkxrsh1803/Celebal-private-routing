import Navbar from '../Pages/Navbar';
import {CodeSection} from "react-code-section-lib";
import './Htmlpage.css';
const Htmlpage = () => {
    
    const value = 
    ` <!DOCTYPE html>
    <html>
    <head>
      <title>My Web Page</title>
    </head>
    <body>
      <h1>Welcome to My Web Page</h1>
      <p>This is a paragraph of text.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <img src="image.jpg" alt="Description of the image">
      <a href="https://www.example.com">Click here</a> to visit Example.com.
      
      <script>
        // JavaScript code can be placed here
        alert('Hello, World!');
      </script>
    </body>
    </html>`
    return (
        <><Navbar />
            <div className="topicdiv">
               
               
                <div className="mainhtmldiv">
                <h1 className="topic">HTML</h1>

                <div className="heading">
                <h3>What is html?</h3>
                <p>HTML stands for Hypertext Markup Language. It is the standard markup language used for creating the structure and content of web pages. HTML uses tags to define elements and their properties, allowing web browsers to interpret and display the content correctly. HTML provides a hierarchical structure that organizes and formats text, images, multimedia, links, and other elements on a web page. It serves as the backbone of the web and is essential for building and designing websites.</p>
                </div>

                <div className="video">
                <h3>To learn More about html play the video</h3>
                
                <iframe width="80%" height="400" src="https://www.youtube.com/embed/3V2q5E4wwko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h3>We hope this video provide you all the necessary information</h3>
                </div>

                <div className="code">
                <h2>Html example:</h2>
                <p>Here's a basic HTML code template:</p>
                <CodeSection theme='dark' showLineNumbers='true' lang='html'>{value}</CodeSection>
                </div>

            </div>
        </div>
    </>
    )
}

export default Htmlpage;        