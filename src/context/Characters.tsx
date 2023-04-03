import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/axios";

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

interface CharactersContextType {
  characters: Characters[];
  currentPage: number;
  totalPage: number;
  filterCharacters: (query: string) => Promise<void>;
  setCurrentPage: (page: number) => void;
  setNamefilter: (query: string) => void;
}

interface CharactersProviderProps {
  children: ReactNode;
}

export const CharactersContext = createContext({} as CharactersContextType);

export function CharactersProvider({ children }: CharactersProviderProps) {
  const [nameFilter, setNamefilter] = useState("");
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  async function filterCharacters(query: string) {
    setNamefilter(query);
    try {
      const response = await api.get(
        `character?page=${currentPage}&name=${query}`
      );
        console.log('teste')
      setCharacters(response.data.results);
      setTotalPage(response.data.info.pages);
    } catch (error) {
      setCharacters([]);
    }
  }

  async function loadCharacters() {
    try {
      const response = await api.get(`character?page=${currentPage}`);
      setCharacters(response.data.results);
      setTotalPage(response.data.info.pages);
      setCurrentPage(1);
    } catch (error) {
      setCharacters([]);
    }
  }

  useEffect(() => {
    loadCharacters();
  }, []);
  useEffect(() => {
    filterCharacters(nameFilter);
  }, [currentPage, nameFilter]);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        filterCharacters,
        currentPage,
        setCurrentPage,
        totalPage,
        setNamefilter,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}
