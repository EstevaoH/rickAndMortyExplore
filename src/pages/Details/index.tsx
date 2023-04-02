import { Heart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loadding } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";
import { FavoritesContext } from "../../context/Favorite";
import { api } from "../../services/axios";
import {
  CharactersInfo,
  CharactersTitle,
  DetailContainer,
  DetailContent,
  EpisodeTable,
  Icon,
  ImgContainer,
  TitleTable,
} from "./styled";

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

interface Characters {
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
}

export function Detail() {
  const list: any = [];
  let { id } = useParams();
  const [locationID, setLocationID] = useState(1);
  const [character, setCharacter] = useState({} as Characters);
  const [episode, setEpisode] = useState<Episode[]>([]);
  const [listaEpisode, setListaEpisode] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { updateFavorites, favorites } = useContext(FavoritesContext);

  async function detailCharacters() {
    try {
      const response = await api.get(`character/${id}`);
      setCharacter(response.data);
      setListaEpisode(response.data.episode);
    } catch (error) {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  }
  function checkCharacter() {
    if (character) {
      setLoading(false);
      setNotFound(false);
    } else {
      setNotFound(true);
      setLoading(false);
    }
  }
  async function episodeList() {
    for (let e = 0; e < listaEpisode.length; e++) {
      const l = await api.get(character.episode[e]);
      list.push(l.data);
    }
    setEpisode(list);
  }

  async function getLocationId() {
    try {
      const response = await api.get(character.location?.url);
      setLocationID(response.data.id);
    } catch (error) {
      console.log(error);
    }
  }

  function isFavorites(character: Characters) {
    return favorites.some((fav) => fav.id === character.id);
  }


  function handleUpdateFavorites(character: Characters) {
    updateFavorites(character);
  }

  useEffect(() => {
    detailCharacters();
  }, [id]);

  useEffect(() => {
    checkCharacter();
    episodeList();
    getLocationId();
  }, [character]);

  useEffect(() => {}, []);

  return (
    <DetailContainer className="">
      {loading ? (
        <Loadding />
      ) : notFound ? (
        <NotFound />
      ) : (
        <>
          <DetailContent>
            <ImgContainer className="">
              <img src={character.image} alt="" />
              <Icon>
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

              </Icon>
            </ImgContainer>
            <CharactersInfo variant={character.status} key={character.id}>
              <CharactersTitle>Character Infos</CharactersTitle>
              <ul>
                <li>
                  <p>Name: {character.name}</p>
                </li>
                <li>
                  <p>Gender: {character.gender}</p>
                </li>
                <li>
                  <p>
                    Location:{" "}
                    <Link to={`/location/detail/${locationID}`}>
                      {character.location?.name}
                    </Link>
                  </p>
                </li>
                <li>
                  <p>Species: {character.species}</p>
                </li>
                <li>
                  <p>
                    Status: <span>{character.status}</span>
                  </p>
                </li>
              </ul>
            </CharactersInfo>
          </DetailContent>
          <TitleTable>List of episodes</TitleTable>
          <EpisodeTable>
            <tbody>
              {episode.map((ep) => {
                return (
                  <tr key={ep.id}>
                    <td width="50%">{ep.name}</td>
                    <td>{ep.episode}</td>
                    <td>{ep.air_date}</td>
                  </tr>
                );
              })}
            </tbody>
          </EpisodeTable>
        </>
      )}
    </DetailContainer>
  );
}
