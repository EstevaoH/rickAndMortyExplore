import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import { CharactersProvider } from "./context/Characters";
import { FavoritesContextProvider } from "./context/Favorite";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CharactersProvider>
          <FavoritesContextProvider>
            <Router />
          </FavoritesContextProvider>
        </CharactersProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
