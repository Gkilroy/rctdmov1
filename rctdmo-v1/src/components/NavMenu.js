
import {Link} from 'react-router-dom';

const NavMenu = (props) => {

    return (
        <>
           <nav>
                <Link to="/">Home</Link>
                {" "}
                <Link to="/contact">Contact Us</Link>
           </nav>
        </>
    )
}

export default NavMenu;