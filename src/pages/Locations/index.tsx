import { useContext, useEffect, useState } from "react";
import { Loadding } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";
import { Paginate } from "../../components/Paginate";
import { api } from "../../services/axios";
import { ImageContainer, LocationsContainer, LocationsTable } from "./styled";
import locationsImg from "../../assets/locations.svg";
import { Link } from "react-router-dom";
import { SearchForm } from "../../components/SearchForm";
import { LocationsContext } from "../../context/Locations";

interface Locations {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [];
  url: string;
}

export function Locations() {
  const { loadLocations, locations, totalPage, setCurrentPage, currentPage } =
    useContext(LocationsContext);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  function checkEmptyList() {
    if (locations.length != 0) {
      setLoading(false);
      setNotFound(false);
    } else {
      setNotFound(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    checkEmptyList();
  }, [locations]);

  useEffect(() => {
    loadLocations();
  }, []);

  return (
    <LocationsContainer>
      <ImageContainer className="">
        <img src={locationsImg} alt="" />
      </ImageContainer>
      <SearchForm />
      {loading ? (
        <Loadding />
      ) : notFound ? (
        <NotFound content="The location you are trying to research went to another universe." />
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
