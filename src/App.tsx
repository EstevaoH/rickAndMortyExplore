import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import { CharactersProvider } from "./context/Characters";
import { FavoritesContextProvider } from "./context/Favorite";
import { LocationsProvider } from "./context/Locations";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CharactersProvider>
          <LocationsProvider>
            <FavoritesContextProvider>
              <Router />
            </FavoritesContextProvider>
          </LocationsProvider>
        </CharactersProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
