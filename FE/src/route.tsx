import type { ReactNode } from "react";
import {
  CharacterItem,
  CharactersList,
  LocationItem,
  LocationsList,
  EpisodeItem,
  EpisodesList,
  Home,
} from "./pages";

interface RouteConfig {
  path: string;
  element: ReactNode;
}

export const ROUTES = {
  home: { path: "/", element: <Home /> },
  characterList: { path: "/character", element: <CharactersList /> },
  characterItem: { path: "/character/:id", element: <CharacterItem /> },
  locationList: { path: "/location", element: <LocationsList /> },
  locationItem: { path: "/location/:id", element: <LocationItem /> },
  episodeList: { path: "/episode", element: <EpisodesList /> },
  episodeItem: { path: "/episode/:id", element: <EpisodeItem /> },
} as const satisfies Record<string, RouteConfig>;
