import FinanceApp from "../assets/hf.jpg";
import ReactSass from "../assets/React-sass.jpg";
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}


export const projectsData: Project[] = [
  {
    title: "My Finance App",
    description: "One of my first projects, a finance app that helps you to control your expenses and incomes.",
    imageUrl: FinanceApp,
    url: "https://anthony-steffen.github.io/my-finance-app/",
  },
  {
    title: "React Sass Curriculo",
    description: "A simple curriculum made with React and Sass.",
    imageUrl: ReactSass,
    url: "https://anthony-steffen.github.io/react-sass-curriculo/",
  },
  
];