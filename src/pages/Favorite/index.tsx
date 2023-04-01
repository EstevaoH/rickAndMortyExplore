import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../context/Favorite";
import { FavoritesContainer, LoadingDiv, NotFavoritesDiv } from "./styled";
import notFavoritesImg from "../../assets/notFavorite.gif";
import { Card } from "../../components/Card";

export function Favorite() {
  const [loading, setLoading] = useState(true);
  const [notFavorite, setNotFavorite] = useState(false);
  const { favorites } = useContext(FavoritesContext);

  async function loadFavorites() {
    if (favorites.length >= 1) {
      setLoading(false);
      setNotFavorite(false);
    } else {
      setLoading(false);
      setNotFavorite(true);
    }
  }


  useEffect(() => {
    loadFavorites();
  }, [favorites]);
  return (
    <div>
      <FavoritesContainer>
        <p>List of favorite characters!</p>
        {loading ? (
          <LoadingDiv>
            <p>Loading...</p>
          </LoadingDiv>
        ) : notFavorite ? (
          <NotFavoritesDiv>
            <p>You don't have favorite characters...</p>
            <img
              src={notFavoritesImg}
            />
          </NotFavoritesDiv>
        ) : (
          <Card characters={favorites} />
        )}
      </FavoritesContainer>
    </div>
  );
}
