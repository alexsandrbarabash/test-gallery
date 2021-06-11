import { createContext } from "react";
import { IData } from "./types";

type UnsplashDataContext = {
  data: IData[];
  selectPhotoLink?: string;
  setSelectPhotoLink: (link: string) => void;
};

const UnsplashContext = createContext<UnsplashDataContext>(
  {} as UnsplashDataContext
);

export default UnsplashContext;
