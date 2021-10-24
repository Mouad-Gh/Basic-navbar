//sfc a snippet that create a stateless functional component
import classes from "./Header.module.scss";
import {Link} from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(true);

    return (  
        <header className={classes.navbar}>
            <div className={classes.navbar__content}>
                <h2 className={classes.navbar__content_logo}>navbar</h2>
                <nav className={`${classes.navbar__content_Items} ${menuOpen ? classes.isMenu : "" }`}>
                    <ul>
                        <li> <Link to='/'>Home</Link> </li>
                        <li> <Link to='/about'>About</Link> </li>
                    </ul>
                    <button>CTA page</button>
                </nav>
                <div className={classes.navbar__content_toggle}>
                    <BiMenuAltRight />
                </div>

            </div>
        </header>

    );
}
 
export default Navbar;