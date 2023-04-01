import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Detail } from "./pages/Details";
import { Favorite } from "./pages/Favorite";
import { Home } from "./pages/Home";
import { LocationDetail } from "./pages/LocationDetail";
import { Locations } from "./pages/Locations";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/character/detail/:id" element={<Detail />} />
        <Route path="/location/" element={<Locations />} />
        <Route path="/location/detail/:id" element={<LocationDetail />} />
      </Route>
    </Routes>
  );
}
