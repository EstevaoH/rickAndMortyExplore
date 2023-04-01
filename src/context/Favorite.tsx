import { createContext, ReactNode, useState } from "react";

type FavoritesContextProviderProps = {
  children: ReactNode;
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
}

type FavoritesContextType = {
  favorites: Character[];
  updateFavorites: (character: Character) => Promise<void>;
};

export const FavoritesContext = createContext({} as FavoritesContextType);

export function FavoritesContextProvider({
  children,
}: FavoritesContextProviderProps){
  const [favorites, setFavorites] = useState<Character[]>(
    
    () => {
    const storagedFavorites = localStorage.getItem("@RickAndMortyExplorer:favorites");

    if (storagedFavorites) {
      return JSON.parse(storagedFavorites);
    }

    return [];
  }
  
  );



  async function updateFavorites(character: Character) {
    try {
      const characterAlreadyInFavorites = favorites.find(
        (characterItem) => characterItem.id === character.id
      );

      if (!characterAlreadyInFavorites) {
        setFavorites([...favorites, { ...character }]);
        localStorage.setItem(
          "@RickAndMortyExplorer:favorites",
          JSON.stringify([...favorites, { ...character }])
        );

        return;
      } else {
        const updatedFavorites = favorites.filter(
          (favoritesItem) => favoritesItem.id !== character.id
        );
        setFavorites(updatedFavorites);
        localStorage.setItem(
          "@RickAndMortyExplorer:favorites",
          JSON.stringify(updatedFavorites)
        );

        return;
      }
    } catch {
      console.log("Erro ao atualizar a lista de favoritos!");
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
