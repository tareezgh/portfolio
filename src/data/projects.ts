import Epicure from "../assets/Epicure.webp";
import iTravel from "../assets/iTravel.webp";
import PokeDex from "../assets/Pokedex.webp";
import MarketMinds from "../assets/MarketMinds.webp";

export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  webUrl: string;
  codeUrl?: string;
}

export const PROJECTS = {
  title: "Portfolio",
  description:
    "Discover my portfolio—where innovation meets functionality. Dive into projects showcasing my full-stack expertise, seamlessly blending technology and design for immersive web and mobile experiences.",

  projects: [
    {
      id: 1,
      title: "Epicure",
      imageUrl: Epicure,
      webUrl: "https://epicureclient-f8b92.web.app/",
      codeUrl: "https://github.com/tareezgh/Epicure",
    },
    {
      id: 2,
      title: "Pokédex",
      imageUrl: PokeDex,
      webUrl: "https://pokedex-15.web.app/",
      codeUrl: "https://github.com/tareezgh/pokedex",
    },
    {
      id: 3,
      title: "iTravel",
      imageUrl: iTravel,
      webUrl: "https://itravel-1.web.app/",
      codeUrl: "",
    },
    {
      id: 4,
      title: "MarketMinds",
      imageUrl: MarketMinds,
      webUrl: "https://market-minds.web.app/",
      codeUrl: "",
    },
  ],
};
