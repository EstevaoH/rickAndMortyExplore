import styled from 'styled-components';

export const FavoritesContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0 ;
  margin-bottom: 2.5rem;
  padding: 0 1.5rem;
  > p {
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 48px;
    font-weight: 700;
    color: ${(props) => props.theme["yellow-500"]};
    text-align: center;
  }
`;

export const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 60px;
  > p {
    font-size: 2.4rem;
    color: ${props => props.theme['yellow-500']};
    margin: 0;
  }
`;

export const NotFavoritesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    font-size: 1.5rem;
    color: ${(props) => props.theme["yellow-500"]};
    margin: 1.5rem 0;
    text-align: center;
  }
  > img {
    margin-bottom: 1rem;
    width: 300px;
    border-radius: 8px;
  }
`;