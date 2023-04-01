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

  @media(max-width: 786px){
    display: flex;
     flex-direction: column;
  }
`;
export const EpisodeTable = styled.table`
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
  }
`;

interface CharactersInfoProps {
  variant: string;
}
export const CharactersInfo = styled.div<CharactersInfoProps>`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
  ul {
    margin-bottom: 2.1rem;
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
    transition: color 0.2s;
    a {
      text-decoration: none;
      color: ${(props) => props.theme["gray-100"]};
      &:hover{
        color: ${(props) => props.theme["green-500"]};
      }
    }
    &:last-child {
      span {
        color: ${(props) =>
          props.variant === "Alive"
            ? props.theme["green-500"]
            : props.variant === "Dead"
            ? props.theme["red-500"]
            : props.theme["gray-500"]};
      }
    }
  }
`;
export const ImgContainer = styled.div`
  position: relative;

`
export const Icon = styled.div`
  svg {
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 1;
    cursor: pointer;
    color: ${(props) => props.theme["red-500"]};
    transition: color 0.2s;
  }
  svg:hover {
    color: ${(props) => props.theme["red-300"]};
  }
`;

export const CharactersTitle = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme["yellow-500"]};

  @media(max-width: 786px){
    margin: 1rem;
  }
`;

export const TitleTable = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme["yellow-500"]};
  margin: 1.5rem 0;
  text-align: center;
`;
