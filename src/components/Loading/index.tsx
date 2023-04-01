import { LoadingDiv } from "./styled";
import loadingImg from '../../assets/loader.gif'
export function Loadding() {
  return (
    <LoadingDiv>
      <h2>Loading...</h2>
      <img src={loadingImg} />
    </LoadingDiv>
  );
}
