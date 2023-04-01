import { useContext } from "react";
import { Link } from "react-router-dom";
import { HeartBreak } from "phosphor-react";
import { FavoritesContext } from "../../context/Favorite";
import {
  GridDiv,
  CardContainer,
  ImgDiv,
  CardContent,
  Icon,
  CardContentStatus,
} from "./styled";

type Characters = {
  characters: Array<Character> | undefined;
};

type Character = {
  episode: string[];
  name: string;
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  favorite: string
};

export function Card({ characters }: Characters, {}) {
  const { updateFavorites } = useContext(FavoritesContext);

  function handleUpdateFavorites(character: Character) {
    updateFavorites(character);
  }

  return (
    <GridDiv>
      {characters !== undefined &&
        characters.map((character) => (
          <CardContainer key={character.id}>
            <ImgDiv>
              <img src={character.image} alt={character.name} />
              <Icon onClick={() => handleUpdateFavorites(character)}>
                <HeartBreak aria-disabled={false} weight="fill" size={30} />
              </Icon>
            </ImgDiv>

            <CardContent>
              <Link to={`/character/detail/${character.id}`}>
                <div>
                  <h3>{character.name}</h3>
                </div>
              </Link>

              <CardContentStatus variant={character.status}>
                <p>{character.species}</p>
                <p>{character.status}</p>
              </CardContentStatus>
            </CardContent>
          </CardContainer>
        ))}
    </GridDiv>
  );
}
