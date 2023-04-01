import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const CharactersTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme.white};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    svg {
      color: ${(props) => props.theme["red-500"]};
      cursor: pointer;
    }

    svg:hover {
      color: ${(props) => props.theme["red-300"]};
    }

    a {
      color: ${(props) => props.theme.white};
      text-decoration: none;
      &:hover {
        color: ${(props) => props.theme["green-500"]};
        transition: color 0.2s;
      }
    }
  }
`;
export const AvatarContainer = styled.td`
    align-items: center;
    display: flex;
    width: 100%;
    gap: 1rem;

`
export const AvatarIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
