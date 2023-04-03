import { useContext } from "react";
import { Link } from "react-router-dom";
import { NotFoundDiv } from "./styled";
import { CharactersContext } from "../../context/Characters";
import notFoundImg from "../../assets/notFound.gif";

interface NotFoundPros {
  content: string;
}

export function NotFound({ content }: NotFoundPros) {
  const { filterCharacters, setNamefilter } = useContext(CharactersContext);
  function resetForm() {
    filterCharacters("");
    setNamefilter("");
  }

  return (
    <NotFoundDiv>
      <h2>{content}</h2>
      <img src={notFoundImg} />
      <Link to="/">
        <button onClick={resetForm} type="button">
          Back
        </button>
      </Link>
    </NotFoundDiv>
  );
}
