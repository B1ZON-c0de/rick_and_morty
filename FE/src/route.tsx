import { lazy, type ComponentType, type LazyExoticComponent } from "react";

interface RouteConfig {
  path: string;
  name?: string;
  element: LazyExoticComponent<ComponentType>;
}

export const ROUTES = {
  home: {
    name: "Главная",
    path: "/",
    element: lazy(() =>
      import("./pages").then((module) => ({ default: module.Home })),
    ),
  },
  characterList: {
    name: "Персонажи",
    path: "/character",
    element: lazy(() =>
      import("./pages").then((module) => ({ default: module.CharactersList })),
    ),
  },
  characterItem: {
    path: "/character/:id",
    element: lazy(() =>
      import("./pages").then((module) => ({ default: module.CharacterItem })),
    ),
  },
  locationList: {
    name: "Локации",
    path: "/location",
    element: lazy(() =>
      import("./pages").then((module) => ({ default: module.LocationsList })),
    ),
  },
  locationItem: {
    path: "/location/:id",
    element: lazy(() =>
      import("./pages").then((module) => ({ default: module.LocationItem })),
    ),
  },
  episodeList: {
    name: "Эпизоды",
    path: "/episode",
    element: lazy(() =>
      import("./pages").then((module) => ({ default: module.EpisodesList })),
    ),
  },
  episodeItem: {
    path: "/episode/:id",
    element: lazy(() =>
      import("./pages").then((module) => ({ default: module.EpisodeItem })),
    ),
  },
} as const satisfies Record<string, RouteConfig>;
