import PortfolioUI from "../../src/components/ui/portfolioUI";

export default function PortfolioPage() {
  const projects = [
    {
      key: 1,
      img: "",
      title: "Weather Tracker",
      description:
        "A weather application built using the OpenWeatherMap API to fetch real-time data.",
      link: "#",
      githublink: "https://github.com/david-garcia1/local-weather-tracker",
    },
    {
      key: 2,
      img: "",
      title: "To-Do App",
      description:
        "A task management tool with CRUD operations and a clean UI built with React.",
      link: "#",
      githublink: "https://github.com/username/todo-app",
    },
    {
      key: 3,
      img: "",
      title: "E-Commerce Store",
      description:
        "A mock online store showcasing responsive design and shopping cart functionality.",
      link: "#",
      githublink: "https://github.com/username/ecommerce-store",
    },
    {
      key: 4,
      img: "",
      title: "Personal Blog",
      description:
        "A blogging platform where users can write and manage articles with a rich text editor.",
      link: "#",
      githublink: "https://github.com/username/personal-blog",
    },
    {
      key: 5,
      img: "",
      title: "Portfolio Website",
      description:
        "A developer portfolio to showcase projects and skills, featuring a dynamic design.",
      link: "#",
      githublink: "https://github.com/username/portfolio-website",
    },
    {
      key: 6,
      img: "",
      title: "Recipe Finder",
      description:
        "A recipe search app that fetches data from an API and filters results by ingredients.",
      link: "#",
      githublink: "https://github.com/username/recipe-finder",
    },
  ];

  return <PortfolioUI projects={projects} />;
}
