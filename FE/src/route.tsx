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

export const ROUTES: Record<string, RouteConfig> = {
  home: { path: "/", element: <Home /> },
  characterList: { path: "/characters", element: <CharactersList /> },
  characterItem: { path: "/characters/:id", element: <CharacterItem /> },
  locationList: { path: "/locations", element: <LocationsList /> },
  locationItem: { path: "/locations/:id", element: <LocationItem /> },
  episodeList: { path: "/episodes", element: <EpisodesList /> },
  episodeItem: { path: "/episodes/:id", element: <EpisodeItem /> },
} as const;
