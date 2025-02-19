import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  css,
  reactjs,
  tailwind,
  nodejs,
  tripguide,
  threejs,
  html,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    hover:
      "A web developer creates, designs, and maintains websites using programming languages and frameworks.",
  },
  {
    title: "React Js Developer",
    icon: mobile,
    hover:
      "React.js is a JavaScript library used to build dynamic, interactive user interfaces with reusable components.",
  },
  {
    title: "Backend Developer",
    icon: backend,
    hover:
      "A backend developer creates server-side logic, databases, and APIs for web applications.",
  },
  {
    title: "Content Creator",
    icon: creator,
    hover:
      "content creator produces engaging digital content, including videos, blogs, and social media posts.",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "React.js ",
    icon: "/img/react.png",
    iconBg: "#383E56",
    date: "Dec 2024 - march 2025",
    points: [
      "Building and maintaining dynamic web applications using React.js, including the creation of reusable components, hooks, and state management techniques like useState and useEffect.",
      "Ensuring seamless integration of front-end and back-end functionalities with APIs.",
      "Implementing efficient routing with React Router.",
      "Keeping up to date with React best practices and new features to continuously improve application performance and maintainability.",
    ],
  },
  {
    title: "JavaScript",
    icon: "./img/javascript.png",
    iconBg: "#E6DEDD",
    date: "sep 2024 - Dec 2024",
    points: [
      "Writing efficient and clean JavaScript code for both front-end and back-end development.",
      "Implementing DOM manipulation and event handling to create interactive user interfaces.",
      "Writing modular and reusable code with JavaScript functions and objects.",
      "Working with JavaScript ES6+ features such as arrow functions, promises, async/await, destructuring, and template literals.",
    ],
  },
  {
    title: "Tailwind CSS",
    icon: "./img/tailwind.png",
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and Tailwind CSS.",
      "Building responsive and interactive websites with Tailwind CSS, HTML, and JavaScript.",
      "Implementing responsive design efficiently using Tailwind's utility-first approach.",
      "Ensuring cross-browser compatibility and optimizing performance with Tailwind best practices.",
      " Integrating third-party UI components and customizing styles using Tailwind CSS.",
    ],
  },
  {
    title: "Html",

    icon: "./img/html.png",
    iconBg: "#E6DEDD",
    // date: "Jan 2023 - Present",
    points: [
      "Developing and structuring web pages using semantic HTML.",
      "Ensuring accessibility and SEO optimization with proper HTML markup.",
      "Creating well-structured and maintainable HTML code for better readability.",
      "Integrating multimedia elements like images, videos, and audio using HTML.",
      "Using forms and input elements to collect user data effectively.",
      "Implementing best practices for performance optimization and cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I have completed a Full Stack Web Development certification from Ducat IT Development School, gaining expertise in React.js, HTML, CSS, JavaScript, and Node.js. This program enhanced my skills in building dynamic, responsive, and scalable web applications.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "A responsive portfolio built with HTML, CSS, and JavaScript, showcasing my skills, projects, and experience with an interactive design.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Java-script",
        color: "pink-text-gradient",
      },
    ],
    image: "./portfolio.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Todo List",
    description:
      "A simple and efficient Todo List web application built with React and Bootstrap. It allows users to add, edit, and delete tasks, helping them stay organized. The responsive design experience across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "json",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: "./todo list.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A simple and efficient Todo List web application built with React and Bootstrap. It allows users to add, edit, and delete tasks, helping them stay organized. The responsive design experience across all devices.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
