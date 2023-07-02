import './App.css';
import CSSpage from './Courses/CSSpage';
import Htmlpage from './Courses/Htmlpage';
import Javpage from './Courses/Javpage';
import Protected from './Protected/Protected';
import Reactpage from './Courses/Reactpage';
import Home from './Pages/Home';
import About from './Pages/About';
import Course from './Pages/Course';
import Landing from './Pages/Landing';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/home' element={<Protected Component={Home}/>}></Route>
        <Route path='/about' element={<Protected Component={About}/>}></Route>
        <Route path='/course' element={<Protected Component={Course}/>}></Route>
        <Route path='/html' element={<Protected Component={Htmlpage}/>}></Route>
        <Route path='/css' element={<Protected Component={CSSpage}/>}></Route>
        <Route path='/js' element={<Protected Component={Javpage}/>}></Route>
        <Route path='/react' element={<Protected Component={Reactpage}/>}></Route>
        <Route path='*' element={<h1>Page not found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;

