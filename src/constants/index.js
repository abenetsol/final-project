import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Web and Applicaiton development",
    company_name: "Ampol technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2018 - April 2021",
    points: [
      "Developing, testing, and maintaining code for websites, web applications, mobile applications, and other software programs using programming languages such as HTML, CSS, JavaScript, Python, Java, and more.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile Develpoment",
    company_name: "Cache POS",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing, testing, and maintaining mobile applications for iOS, Android, and other platforms using programming languages such as Swift, Java, Kotlin, and more.",
      "Collaborating with designers, project managers, and other stakeholders to ensure that the mobile application meets the needs of the organization and end-users.",
      " Testing the mobile application in various environments, identifying and fixing bugs or errors using debugging tools, and collaborating with other developers to find solutions to complex problems.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "HEAD GRAPHIC DESIGNER",
    company_name: "Bemmy Technology Group",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Designing and developing visual concepts, including layout, typography, color schemes, and imagery, for a variety of media such as websites, print materials, social media, and advertisements.",
      "Collaborating with other designers, project managers, clients, and other stakeholders to ensure that design projects meet the needs of the organization and end-users. This may involve attending meetings, providing input on design and functionality, and working together to solve problems.",
      "Managing design projects from start to finish, including creating project timelines, assigning tasks to team members, and ensuring that design projects are completed on time and within budget.",
      "Staying ahead of the curve by Staying current with the latest trends and developments in design by attending conferences, ",
    ],
  },
  {
    title: "AND JUNIOR DEVELOPER",
    company_name: "Ethio medicare",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Crafting, refining, and maintaining code for websites, web applications, mobile applications, and other software programs using programming languages such as HTML, CSS, JavaScript, Python, Java, and more.",
      "Collaborating with designers, project managers, and other stakeholders to ensure that software projects meet the needs of the organization and end-users.",
      "Utilizing debugging tools, investigating software performance in different environments, and working with other developers to solve complex issues.",
      "Seeking out opportunities to stay up-to-date with new programming languages, frameworks, and tools by participating in training courses, attending tech conferences, and joining online developer communities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Job proved me wrong.",
    name: "Bethel mul",
    designation: "Manager",
    company: "Amran hotel",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abenet does.",
    name: "David William",
    designation: "COO",
    company: "Ampol technologies",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Job(Eyob) optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Sara",
    designation: "CTO",
    company: "Cache POS",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
