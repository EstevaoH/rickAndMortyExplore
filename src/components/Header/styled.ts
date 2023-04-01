import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 2.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img{
    width: 400px ;
  }
`;

export const NavContainer = styled.nav`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;

  justify-content: center;
`;
export const NavContent = styled.ul`
  width: 100%;
  margin-top: 0.7rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  list-style-type: none;
`;
export const NavItem = styled.li`
  a {
    color: ${(props) => props.theme["gray-300"]};
    text-decoration: none;
    transition: color 0.2s, border-bottom 0.2s;
  }
  a:hover {
    border-bottom: 1px solid ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["green-300"]};
  }
  .active{
    color: ${props => props.theme["green-500"]}
  }
`;
