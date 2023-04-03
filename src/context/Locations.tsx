import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/axios";

interface Locations {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [];
  url: string;
}

interface LocationsContextType {
  totalPage: number;
  locations: Locations[];
  currentPage: number;
  loadLocations: () => void;
  setCurrentPage: (page: number) => void;
  filterLocations: (query: string) => void;
}

interface LocationsProviderProps {
  children: ReactNode;
}

export const LocationsContext = createContext({} as LocationsContextType);
export function LocationsProvider({ children }: LocationsProviderProps) {
  const [locationFilter, setLocationFilter] = useState("");
  const [locations, setLocations] = useState<Locations[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  async function filterLocations(query: string) {
    setLocationFilter(query);
    try {
      const response = await api.get(
        `location?page=${currentPage}&name=${query}`
      );

      setLocations(response.data.results);
      setTotalPage(response.data.info.pages);
    } catch (error) {
      setLocations([]);
    }
  }

  async function loadLocations() {
    try {
      const response = await api.get(`location?page=${currentPage}`);
      setLocations(response.data.results);
      setTotalPage(response.data.info.pages);
      setCurrentPage(1);
    } catch (error) {
      setLocations([]);
    }
  }

  useEffect(() => {
    filterLocations(locationFilter);
  }, [currentPage, locationFilter]);
  return (
    <LocationsContext.Provider
      value={{
        totalPage,
        setCurrentPage,
        currentPage,
        loadLocations,
        locations,
        filterLocations,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
}
