import styled from 'styled-components'
import { FaGithub , FaInstagram, FaFacebook, FaDiscord, FaFireAlt } from "react-icons/fa"

export const Nav =  styled.nav`
    background: #000;
    height: 10px;
    display: flex;
    justify-content: space-between;
    padding: 2.5rem;
    z-index: 10;
    color: #fff;
`

export const Github = styled(FaGithub)`
  display: flex;
  height: 30px;
  width: 30px;
  justify-content: center;
  padding: 0rem;
`
export const Instagram = styled(FaInstagram)`
  display: flex;
  height: 30px;
  width: 30px;
  justify-content: center;
  padding: 0rem;
`

export const  Facebook = styled(FaFacebook)`
  display: flex;
  height: 30px;
  width: 30px;
  justify-content: center;
  padding: 0rem;
`

export const Discord = styled(FaDiscord)`
  display: flex;
  height: 30px;
  width: 30px;
  justify-content: center;
  padding: 0rem;
`

export const NavMenu = styled.div`
 display: flex;
 align-items: center;
 margin-right: -24px;
 
 
 @media screen and (max-width: 768px) {
     display: none;
 }

 a {
    color: #ffffff;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`

export const FireAlt = styled(FaFireAlt)`
  display: flex;
  height: 30px;
  width: 30px;
  position: fixed
  item-align: left;
  padding: 0rem;
  
`

export const Header = styled.p`
    font-size: 1.5em;
    color: #FFF;
    justify-content: top;
    padding: 0rem;
    z-index: 10;
    text-align: right;
`
