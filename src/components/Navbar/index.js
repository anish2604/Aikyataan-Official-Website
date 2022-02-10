import React from 'react';
import {
    Nav, 
    Bars, 
    NavMenu, 
    NavLink, 
    NavBtn, 
    NavBtnLink
} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/skill" activeStyle>
                        Skill
                    </NavLink>
                    <NavLink to="/experience" activeStyle>
                        Experience
                    </NavLink>
                    <NavLink to="/project" activeStyle>
                        Project
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/contact-me">Contact Me</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
