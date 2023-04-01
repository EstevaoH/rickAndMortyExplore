import {NavLink} from 'react-router-dom'
import { HeaderContainer, HeaderContent, NavContainer, NavContent, NavItem } from "./styled";
import imglogo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={imglogo} alt="" />
        <NavContainer>
          <NavContent>
            <NavItem>
              <NavLink to="/">Characters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/favorite">Favorites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/location">Locations</NavLink>
            </NavItem>
          </NavContent>
        </NavContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
