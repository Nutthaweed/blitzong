import React from 'react';
import { Nav, 
    Github, 
    Facebook, 
    Instagram, 
    Discord, 
    NavMenu,  
    FireAlt,
    Header,
    } from './NavbarElements'

const Navbar = () => {
    return (
        <>
          <Nav>
          <NavMenu>
          <Header><FireAlt/>Blitzong</Header>
         <a href="https://github.com/nutthaweed"><Github/></a>
         <a href="https://facebook.com/Nutthaweed"> <Facebook /></a>
         <a href="https://www.instagram.com/nutthaweed/"><Instagram /></a>
         <a href="https://discord.gg/VvmSBQNqg7"><Discord /></a>
         </NavMenu>
         </Nav>
        </>
    )
}

export default Navbar;