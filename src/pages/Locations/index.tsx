import { useEffect, useState } from "react";
import { Loadding } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";
import { Paginate } from "../../components/Paginate";
import { api } from "../../services/axios";
import { ImageContainer, LocationsContainer, LocationsTable } from "./styled";
import locationsImg from "../../assets/locations.svg";
import { Link } from "react-router-dom";

interface Locations {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [];
  url: string;
}

export function Locations() {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [locations, setLocations] = useState<Locations[]>([]);

  const sufixUrl: any = [];

  function getSufixUrl() {
    for (let i = 1; i <= locations.length; i++) {
      sufixUrl.push(locations[i]?.url.slice(32));
      console.log(sufixUrl);
    }
  }

  async function loadLocations() {
    try {
      const response = await api.get(`location?page=${currentPage}`);
      setLocations(response.data.results);
      console.log(response.data.results);
      setTotalPage(response.data.info.pages);
      // setCurrentPage(1);
    } catch (error) {
      setLocations([]);
    }
  }
  useEffect(() => {
    loadLocations();
    getSufixUrl();
  }, [currentPage]);

  return (
    <LocationsContainer>
      <ImageContainer className="">
        <img src={locationsImg} alt="" />
      </ImageContainer>
      {loading ? (
        <Loadding />
      ) : notFound ? (
        <NotFound />
      ) : (
        <>
          <LocationsTable>
            <tbody>
              {locations?.map((content) => {
                return (
                  <tr key={content.id}>
                    <td>{content.name}</td>

                    <td>{content.type}</td>
                    <td>
                      <Link to={`/location/detail/${content.id}`}>Details</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </LocationsTable>
          <Paginate
            currentPage={currentPage}
            totalPage={totalPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </LocationsContainer>
  );
}
