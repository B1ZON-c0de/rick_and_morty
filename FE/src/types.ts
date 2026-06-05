import type { ReactNode } from "react";

export interface ICharacter {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Male" | "Female" | "unknown";
  image: string;
  created: string;
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export interface IListChildrenProps<T> {
  data: T;
  getLastNode?: (node: Element) => void;
}

export type IListChildren = <T>(props: IListChildrenProps<T>) => ReactNode;
