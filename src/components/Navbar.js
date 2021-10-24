//sfc a snippet that create a stateless functional component
import classes from "./Header.module.scss";
import {Link, useHistory} from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";


const Navbar = () => {

    const history=useHistory();

    const [menuOpen,setMenuOpen] = useState(false);
    const [size,setSize] = useState({
        width: undefined,
        height: undefined
    });
    //to 
    useEffect(() => {
        const sizeHundler= ()=>{
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        
        window.addEventListener('resize',sizeHundler)
        return () => {
            //the cleanUp function
            window.removeEventListener('resize',sizeHundler)
        }
    }, [])

    //to prevent the menuopen on the large size
    useEffect(() => {
        if(size.width>768 && menuOpen ){
            setMenuOpen(false);
        }
        
    }, [size.width,menuOpen])

    const toggleClick = () => {
        setMenuOpen(!menuOpen);
    }

    //
    const ctaClickHandler= ()=>{
        toggleClick();
        history.push('/page-cta');
    }

    return (  
        <header className={classes.navbar}>
            <div className={classes.navbar__content}>
                <Link to='/' className={classes.navbar__content_logo}>navbar</Link>
                <nav className={`${classes.navbar__content_Items} ${menuOpen && size.width<768 ? classes.isMenu : "" }`} >
                    <ul>
                        <li> <Link to='/' onClick={toggleClick} >Home</Link> </li>
                        <li> <Link to='/about' onClick={toggleClick} >About</Link> </li>
                    </ul>
                    <button onClick={ctaClickHandler}>CTA page</button>
                </nav>
                <div className={classes.navbar__content__toggle}>
                    {menuOpen ? (<AiOutlineClose onClick={toggleClick} />) : <BiMenuAltRight onClick={toggleClick} /> }
                    
                </div>

            </div>
        </header>

    );
}
 
export default Navbar;