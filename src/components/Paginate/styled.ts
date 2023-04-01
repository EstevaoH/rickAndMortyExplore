import styled from "styled-components";
interface ButtonPageProsp {
  active: boolean;
}
export const PaginatiosContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 2.5rem 0;
`;

export const PaginatiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const PaginatiosContent = styled.div<ButtonPageProsp>`
  background: ${(props) =>
    props.active === true ? props.theme["green-700"] : props.theme["gray-600"]};
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;

  border-radius: 6px;
  width: 40px;
  height: 40px;
  transition: background-color 0.2s;
  &:hover {
    background: ${(props) => props.theme["green-500"]};
  }

  span:first-child {
    margin-left: 1rem;
  }
  span:last-child {
    margin-right: 1rem;
  }
`;

export const ButtonPage = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  line-height: 0;
  display: flex;
  svg {
    color: ${(props) => props.theme["green-500"]};

    &:hover {
      color: ${(props) => props.theme["green-300"]};
      transition: color 0.2s;
    }
  }
  &:disabled {
    cursor: not-allowed;
    svg {
      color: ${(props) => props.theme["gray-600"]};
    }
  }
`;
