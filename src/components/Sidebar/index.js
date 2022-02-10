import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/blog" onClick={toggle}>
                        Blog
                    </SidebarLink>
                    <SidebarLink to="/event" onClick={toggle}>
                        Event
                    </SidebarLink>
                    <SidebarLink to="/recruitment" onClick={toggle}>
                        Recruitment
                    </SidebarLink>
                    <SidebarLink to="/team" onClick={toggle}>
                        Team
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact-me" onClick={toggle}>
                        Contact Me
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>            
        </SidebarContainer>
    )
}

export default Sidebar
