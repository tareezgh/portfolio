import Epicure from "../assets/Epicure.png";
import iTravel from "../assets/iTravel.png";
import PokeDex from "../assets/Pokedex.png";
export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  webUrl: string;
  codeUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Epicure",

    imageUrl: Epicure,
    webUrl: "https://epicureclient-f8b92.web.app/",
    codeUrl: "",
  },
  {
    id: 2,
    title: "PokeDex",

    imageUrl: PokeDex,
    webUrl: "https://pokedex-15.web.app/",
    codeUrl: "",
  },
  {
    id: 3,
    title: "iTravel",

    imageUrl: iTravel,
    webUrl: "https://itravel-1.web.app/",
    codeUrl: "",
  },
  // {
  //   id: 4,
  //   title: "Stock App",
  //   imageUrl: Epicure,
  //   webUrl: "https://mystocks-app.web.app/sign-in",
  //   codeUrl: "",
  // },
];
