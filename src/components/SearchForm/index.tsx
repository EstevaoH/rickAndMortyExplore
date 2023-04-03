import { MagnifyingGlass } from "phosphor-react";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styled";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CharactersContext } from "../../context/Characters";
import { useSearchParams } from "react-router-dom";
import { LocationsContext } from "../../context/Locations";

const searchFormSchema = z.object({
  name: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { filterCharacters } = useContext(CharactersContext);
  const { filterLocations } = useContext(LocationsContext);

  const { register, handleSubmit, watch, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });
  const query = watch("name");
  const isSubmitDisabled = !query;

  async function handleFilterName(data: SearchFormInputs) {
    await filterCharacters(data.name);

    reset();
  }
  async function handleFilterLocation(data: SearchFormInputs) {
    await filterLocations(data.name);
    reset();
  }

  function handleSearch(params: SearchFormInputs) {
    const searchParams = window.location.pathname;

    if (searchParams === "/location") {
      handleFilterLocation(params);
    } else {
      handleFilterName(params);
    }
  }

  useEffect(() => {}, [query]);
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <input
        type="text"
        placeholder="Search for a character"
        {...register("name")}
      />
      <button type="submit" disabled={isSubmitDisabled}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  );
}
