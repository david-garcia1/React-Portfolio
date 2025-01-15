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
      title: "Event Scheduler",
      description:
        "Allows users to manage their organized events by adding volunteers or employees to the user's personal schedule.",
      link: "#",
      githublink: "https://github.com/JacobBaqleh1/event-task-scheduler",
    },
    {
      key: 3,
      img: "",
      title: "Employee vault",
      description:
        "A simple way to keep information on your employees, such as department, salary, name, and job role.",
      link: "#",
      githublink: "https://github.com/username/ecommerce-store",
    },
    {
      key: 4,
      img: "",
      title: "Fair-Fund",
      description:
        "Fair Fund is a user-friendly web application designed to simplify expense tracking and improve financial management.",
      link: "#",
      githublink: "https://github.com/david-garcia1/Fair-Fund",
    },
    {
      key: 5,
      img: "",
      title: "Create-a-vehicle",
      description:
        "Used to generate a personal garage of your vehicles inside the application.",
      link: "#",
      githublink: "https://github.com/david-garcia1/create-a-vehicle",
    },
    {
      key: 6,
      img: "",
      title: "README-Creator",
      description:
        "This is a README creator for users that want to generate a professional README file.",
      link: "#",
      githublink: "https://github.com/david-garcia1/README-Creator",
    },
  ];

  return <PortfolioUI projects={projects} />;
}
