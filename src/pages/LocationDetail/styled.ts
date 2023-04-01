import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const DetailContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  padding: 1.5rem;
  background: ${(props) => props.theme["gray-700"]};

  img {
    width: 300px;
    object-fit: contain;
    border-radius: 8px;
  }
`;

export const LocationInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
  ul {
    width: 100%;
    padding-left: 2rem;
    border-radius: 6px;
    display: grid;
    gap: 0.2rem;
  }
  li {
    width: 100%;
    font-size: 1.25rem;
    padding: 1.25rem 2rem;
    border: 1px solid ${(props) => props.theme["gray-800"]};
    background: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-100"]};
    list-style-type: none;
    border-radius: 6px;
  }
`;

export const LocationTitle = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme["yellow-500"]};
`;

export const CharactersTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  h2 {
  }
  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    a {
      font-size: 1.25rem;
      color: ${(props) => props.theme["gray-300"]};
      text-decoration: none;
      &:hover {
        color: ${(props) => props.theme["green-500"]};
        transition: color 0.2s;
      }
    }
  }
`;

export const CharactersTableHeader = styled.div`
display: grid;
gap: 1rem;
justify-content: center;
margin-top: 1rem;
img{
  width: 300px;
  margin-top: 1rem;
  border-radius: 8px;
}

`

export const AvatarContainer = styled.td`
  align-items: center;
  display: flex;
  width: 100%;
  gap: 1rem;
`;
export const AvatarIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
