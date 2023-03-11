import { container } from "./types";

export interface ITheme {
  palette?: {
    primary?: {
      main?: string;
    };
  };

  customError?: {
    main?: string;
    dark?: string;
  };
}

export interface IStylesNavbar {
  container: {
    display: string;
    justifyContent: string;
    position: "absolute" | "relative" | "fixed";
    top: number;
    right: number;
    left: number;
    padding: string;
    alignItems: string;
    height: number;
  };
  imageLogo: {
    width: number;
    height: number;
  };
}

export interface IStylesThumbnail {
  container: container;
  bookWrapper: {
    display: string;
    justifyContent: string;
    alignItems: string;
    height: number;
  };
  prices: {
    width: number;
    height: number | string;
    border?: string;
  };
}
