import FinanceApp from "../assets/hf.jpg";
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
    title: "Project 2",
    description: "Description 2",
    imageUrl: "https://via.placeholder.com/150",
    url: "https://www.google.com",
  },
  {
    title: "Project 3",
    description: "Description 3",
    imageUrl: "https://via.placeholder.com/150",
    url: "https://www.google.com",
  },

  {
    title: "Project 4",
    description: "Description 4",
    imageUrl: "https://via.placeholder.com/150",
    url: "https://www.google.com",
  },
 
];