import styled from "styled-components";

export const GridDiv = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  display: grid;
  grid-gap: 3.2rem;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
`;

export const CardContainer = styled.div`
  width: 300px;
  overflow: hidden;
  border-radius: 8px;
  color: ${(props) => props.theme["gray-100"]};
  background: ${(props) => props.theme["gray-900"]};
  transition: 0.3s;
  animation: ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ImgDiv = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px;
`;

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

export const CardContent = styled.div`
  margin: 1rem;
  margin-top: 0.5rem;
  background: ${(props) => props.theme["gray-900"]};
  > div {
    display: flex;
  }
  > div h3 {
    color: ${(props) => props.theme.white};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    margin-bottom: 0.5rem;
    padding-bottom: 1rem;
    line-height: 2;
    &:hover{
      color: ${(props) => props.theme["green-500"]};
    }
  }
`;

interface StatuProps {
  variant: string;
}

export const CardContentStatus = styled.div<StatuProps>`
  display: flex;
  justify-content: space-between;
  p:last-child {
    color: ${(props) =>
      props.variant === "Alive"
        ? props.theme["green-500"]
        : props.variant === "Dead"
        ? props.theme["red-500"]
        : props.theme["gray-500"]};
  }
`;
