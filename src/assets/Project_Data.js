import reactlogo from "./Tech/react.svg";
import nodelogo from "./Tech/node.svg";
import sqllogo from "./Tech/mysql.svg";
import phplogo from "./Tech/php.svg";
import csharplogo from "./Tech/csharp.svg";
import htmllogo from "./Tech/html5.svg";
import csslogo from "./Tech/css3.svg";
import jslogo from "./Tech/javascript.svg";

const Project_Data = [
  {
    title: "Weather App",
    description: "A responsive and theme-aware weather application built with React. It displays real-time weather and 5-day forecasts for any city using the OpenWeatherMap API.",
    link: "https://github.com/Liyanage-Achinthya/Weather-App",
    tech: [
      { name: "React", icon: reactlogo }
    ]
  },
  {
    title: "Carbon Footprint Web App",
    description: "This sustainability-focused web app helps users track and calculate their carbon emissions. Users input data through dynamic forms, and the app calculates emissions via backend API, providing visual results and reduction tips.",
    link: "https://github.com/e2245546ULAP/Carbon-Footprint-Counter",
    tech: [
      { name: "React", icon: reactlogo },
      { name: "Node.js", icon: nodelogo },
      { name: "MySQL", icon: sqllogo }
    ]
  },
  {
    title: "To Do List Web App",
    description: "A simple and intuitive To-Do list web application. Users can add, edit, and delete tasks, and the app provides a clean interface for task management.",
    link: "https://github.com/Liyanage-Achinthya/To-Do-List",
    tech: [
      { name: "PHP", icon: phplogo },
      { name: "MySQL", icon: sqllogo }
    ]
  },

   {
    title: "Receptionist System",
    description: "This is a customer management solution designed for vehicle service centers.",
    link: "https://github.com/Liyanage-Achinthya/Receptionist-System",
    tech: [
      { name: "C#", icon: csharplogo }
    ]
  },
  {
    title: "Calculator App",
    description: "A simple calculator application, that performs basic arithmetic operations and has a user-friendly interface.",
    link: "https://github.com/Liyanage-Achinthya/Calculator",
    tech: [
      { name: "HTML", icon: htmllogo },
      { name: "CSS", icon: csslogo },
      { name: "JavaScript", icon: jslogo }
    ]
  },
];

export default Project_Data;
