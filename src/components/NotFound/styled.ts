import styled from "styled-components";

export const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["yellow-500"]};
    margin: 2rem 0;
    text-align: center;
  }
  > img {
    margin-bottom: 1rem;
    width: 300px;
    border-radius: 8px;
  }
  a {
    text-decoration: none;
  }
  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: ${(props) => props.theme["green-500"]};
    border: 1px solid ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme["green-300"]};
      border-color: ${(props) => props.theme["green-300"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
