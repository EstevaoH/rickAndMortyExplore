import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchForm } from "../../components/SearchForm";
import { Paginate } from "../../components/Paginate";
import { CharactersContext } from "../../context/Characters";

import {
  AvatarContainer,
  AvatarIcon,
  CharactersTable,
  HomeContainer,
} from "./styled";
import { Heart } from "phosphor-react";
import { FavoritesContext } from "../../context/Favorite";
import { Loadding } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";

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
  favorite: string;
};

export function Home() {
  const { characters, totalPage, currentPage, setCurrentPage } =
    useContext(CharactersContext);
  const { favorites, updateFavorites } = useContext(FavoritesContext);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(true);

  function handleUpdateFavorites(character: Character) {
    updateFavorites(character);
  }

  function isFavorites(character: Character) {
    return favorites.some((fav) => fav.id === character.id);
  }

  function checkEmptyList() {
    if (characters.length != 0) {
      setLoading(false);
      setNotFound(false);
    } else {
      setNotFound(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    checkEmptyList();
  }, [characters]);

  return (
    <HomeContainer>
      <SearchForm />
      {loading ? (
        <Loadding />
      ) : notFound ? (
        <NotFound
          content="The character you are trying to research went to another universe."
        />
      ) : (
        <>
          <CharactersTable>
            <tbody>
              {characters.map((character) => {
                return (
                  <tr key={character.id}>
                    <AvatarContainer width="50%">
                      <AvatarIcon src={character.image} alt="" />
                      {character.name}
                    </AvatarContainer>
                    <td>
                      <Link to={`/character/detail/${character.id}`}>
                        Details
                      </Link>
                    </td>
                    <td>
                      {isFavorites(character) ? (
                        <Heart
                          weight="fill"
                          onClick={() => handleUpdateFavorites(character)}
                          size={30}
                        />
                      ) : (
                        <Heart
                          onClick={() => handleUpdateFavorites(character)}
                          size={30}
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </CharactersTable>
          <Paginate
            currentPage={currentPage}
            totalPage={totalPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </HomeContainer>
  );
}
