import React, { useEffect, useState } from 'react';

import {
    Nav,
    Bars,
    MobileIcon, 
    NavbarContainer,
    NavMenu, 
    NavLogo,
    NavItem,
    NavLinks, 
    NavBtn, 
    NavBtnLink
} from './NavbarElements';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                    >
                        <img src={require('../../images/Aikyatanlogo.png')}  
                            style={{
                                width: '2.5rem'
                            }}alt='' 
                        />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <Bars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/blog"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                            >
                                Blog
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/event"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                            >
                                Event
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/recruitment"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                            >
                                Recruitment
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/team"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                            >
                                Team
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact-me"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                        >
                            Contact Me
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
