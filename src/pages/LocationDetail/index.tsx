import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loadding } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";
import { api } from "../../services/axios";
import locationVoidImg from "../../assets/void.gif";
import {
  AvatarContainer,
  AvatarIcon,
  CharactersTable,
  CharactersTableHeader,
  DetailContainer,
  DetailContent,
  LocationInfo,
  LocationTitle,
} from "./styled";

interface Locations {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [];
  url: string;
}

interface Characters {
  episode: string[];
  name: string;
  gender: string;
  id: number;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
}

export function LocationDetail() {
  const list: any = [];

  let { id } = useParams();
  const [location, setLocation] = useState({} as Locations);
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [listaCharacters, setListaCharacters] = useState<Characters[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  async function detailLocation() {
    try {
      const response = await api.get(`location/${id}`);
      setLocation(response.data);
      setListaCharacters(response.data.residents);
    } catch (error) {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  }
  function checkLocation() {
    if (location) {
      setLoading(false);
      setNotFound(false);
    } else {
      setNotFound(true);
      setLoading(false);
    }
  }
  async function episodeList() {
    for (let e = 0; e < listaCharacters.length; e++) {
      const l = await api.get(location.residents[e]);
      list.push(l.data);
    }
    setCharacters(list);
  }

  useEffect(() => {
    detailLocation();
  }, [id]);

  useEffect(() => {
    checkLocation();
    episodeList();
  }, [location]);

  return (
    <DetailContainer className="">
      {loading ? (
        <Loadding />
      ) : notFound ? (
        <NotFound />
      ) : (
        <>
          <DetailContent>
            <LocationInfo key={location.id}>
              <LocationTitle>Location Infos</LocationTitle>
              <ul>
                <li>
                  <p>Name: {location.name}</p>
                </li>
                <li>
                  <p>Type: {location.type}</p>
                </li>
                <li>
                  <p>Dimension: {location.dimension}</p>
                </li>
              </ul>
            </LocationInfo>
          </DetailContent>
          {characters.length === 0 ? (
            <CharactersTableHeader>
              <LocationTitle>There is nobody here</LocationTitle>
              <img src={locationVoidImg} alt="" />
            </CharactersTableHeader>
          ) : (
            <CharactersTableHeader>
              <LocationTitle>Residents</LocationTitle>
            </CharactersTableHeader>
          )}
          <CharactersTable>
            <tbody>
              {characters.map((character) => {
                return (
                  <tr key={character.id}>
                    <AvatarContainer>
                      <AvatarIcon src={character.image} alt="" />
                      {character.name}
                    </AvatarContainer>
                    <td>
                      <Link to={`/character/detail/${character.id}`}>
                        Details
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </CharactersTable>
        </>
      )}
    </DetailContainer>
  );
}
