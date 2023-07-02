import LogoutButton from '../Components/LogoutButton';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

    const navigate = useNavigate();
    const homepageHandler = () => {
        navigate('/home')
    }
    const aboutpageHandler = () => {
        navigate('/about')
    }
    const coursepageHandler = () => {
        navigate('/course')
    }

    var auth=false;
    if(localStorage.getItem('Username')&&localStorage.getItem('Password'))
    {
       auth=true;
    }
    return (
        <>
            <div className="header">
                <div className='logo'>Ɛ𝓷𝓸𝓿𝓪𝓽𝓮</div>
                {auth&&<ul className="menu">
                    <li onClick={homepageHandler}>Home</li>
                    <li onClick={aboutpageHandler}>About</li>
                    <li onClick={coursepageHandler}>Courses</li>
                </ul>}
                {auth&&<LogoutButton></LogoutButton>}
            </div>

        </>
    )
}

export default Navbar;