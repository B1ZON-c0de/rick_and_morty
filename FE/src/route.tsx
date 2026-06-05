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
  name?: string;
  element: ReactNode;
}

export const ROUTES = {
  home: { name: "Главная", path: "/", element: <Home /> },
  characterList: {
    name: "Персонажи",
    path: "/character",
    element: <CharactersList />,
  },
  characterItem: { path: "/character/:id", element: <CharacterItem /> },
  locationList: {
    name: "Локации",
    path: "/location",
    element: <LocationsList />,
  },
  locationItem: { path: "/location/:id", element: <LocationItem /> },
  episodeList: { name: "Эпизоды", path: "/episode", element: <EpisodesList /> },
  episodeItem: { path: "/episode/:id", element: <EpisodeItem /> },
} as const satisfies Record<string, RouteConfig>;
