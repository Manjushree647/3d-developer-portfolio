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
  timetablelogo,
  mongodb,
  git,
  figma,
  docker,
  mitya_home,
  timetable,
  hotel,
  threejs,
  cognifyzlogo,
  Gobmidelogo,
  mityalogo,
  github,
  java,
  springboot,
  vscode,
  dsa,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work", // This jumps to your Experience timeline
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech Stack",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "footer",
    title: "Connect",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Data Management",
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
  name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Data Structures & Algorithms",
    icon: dsa,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
   name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "VsCode",
    icon: vscode,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Mitray Energy Solutions (Nashik)",
    icon: mityalogo, 
    iconBg: "#383E56",
    date: "Jan 2026 - Present",
    points: [
      "Developed and maintained the official company website using JavaScript, ensuring a highly responsive and optimized user experience.",
      "Managed the end-to-end web hosting process and successfully deployed the live application on Google infrastructure.",
      "Collaborated closely with stakeholders to translate business requirements into functional web features, directly impacting the company's digital presence.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Cognifyz Technologies (remote)",
    icon: cognifyzlogo, 
    iconBg: "#E6DEDD",
    date: "Feb 2025 - March 2026",
    points: [
      "Built and optimized interactive client-side interfaces using modern web development technologies (HTML, CSS, JavaScript).",
      "Ensured cross-browser compatibility and mobile responsiveness for various web application modules.",
      "Gained hands-on industry experience adapting to agile workflows and troubleshooting technical frontend issues.",
    ],
  },
  {
    title: "Java Developer Intern",
    company_name: "Globmides Technology (pune)",
    icon: Gobmidelogo, 
    iconBg: "#383E56",
    date: "April 2024 - July 2024",
    points: [
      "Engineered robust backend application logic focusing on core Java programming and Object-Oriented principles.",
      "Contributed to the software development lifecycle by building, testing, and debugging functional modules.",
      "Strengthened foundational development skills and strictly adhered to industry-standard coding practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Secured 1st Rank among numerous participants in a highly competitive programming and algorithmic problem-solving event.",
    name: "A2Z Coding Competition",
    designation: "1st Rank",
    company: "2025",
    image: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png", // Gold Trophy Icon
  },
  {
    testimonial:
      "Ranked in the top 20 out of 500+ participating teams, demonstrating strong teamwork, innovation, and rapid development skills under pressure.",
    name: "AlgoForge'25 Hackathon",
    designation: "Top 20 Team",
    company: "2025",
    image: "https://cdn-icons-png.flaticon.com/512/1903/1903162.png", // Star Badge Icon
  },
  {
    testimonial:
      "Actively upskilling in Data Structures and Algorithms with 70+ problems solved and a solid contest rating of 1452.",
    name: "LeetCode",
    designation: "Competitive Programmer",
    company: "Ongoing",
    image: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png", // Coding Icon
  },
  {
    testimonial:
      "Selected as an esteemed scholar based on academic excellence, technical merit, and future potential in engineering.",
    name: "Cummins & AATMAJA",
    designation: "Dual Scholar",
    company: "2024 - 2025",
    image: "https://cdn-icons-png.flaticon.com/512/2002/2002886.png", // Graduation/Scholar Icon
  },
  {
    testimonial:
      "Collaborated with developers to rapidly prototype and build innovative solutions under strict time constraints at the prestigious TECHFIESTA hackathon.",
    name: "TECHFIESTA 2025",
    designation: "Participant",
    company: "PICT Pune",
    image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png", // A cool rocket icon!
  },
  {
    testimonial:
      "Currently contributing to live production environments and optimizing corporate web solutions as a part of the core development team.",
    name: "Mitray Energy Solutions",
    designation: "web Intern",
    company: "Present",
    image: mityalogo, 
  },
];

const projects = [
  {
    name: "Mitray Energy Solutions",
    description:
      "The official corporate website for Mitray Energy Solutions, built collaboratively with a team.                           I developed efficient client-side logic and managed the deployment on Google infrastructure.focusing on efficient JavaScript functionality and live deployment on Google cloud using Hostinger  #",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html-css",
        color: "green-text-gradient",
      },
      {
        name: "google-hosting",
        color: "pink-text-gradient",
      },
    ],
    image: mitya_home, // We will add a screenshot of the site next!
    // Since it's a private company site, we put the LIVE link here instead of GitHub!
    source_code_link: "https://www.mitrayenergysolutions.com/", 
    source_code_icon: mityalogo,
  },
  {
    name: "Smart Time-Table Generator",
    description:
      "An automated scheduling platform designed to eliminate timetable clashes for educational institutions. It streamlines the allocation of classes and resources, providing staff and students with an optimized, easily accessible daily schedule.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: timetable, // Save your screenshot as timetableImg in your assets!
    source_code_icon: timetablelogo,
  },
 {
    name: "Hotel Management System",
    description:
      "A comprehensive management solution, including real-time room booking, guest check-ins, and check-outs.Under the hood, the system leverages structured data management and object-oriented design principles to securely process guest records.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "NetBeans",
        color: "green-text-gradient",
      },
      {
        name: "database-mysql",
        color: "pink-text-gradient",
      },
    ],
    image: hotel, // Make sure to import the screenshot you took!
    source_code_link: "https://github.com/Manjushree647/Hotel-management-system",
    source_code_icon: github,
  },
];

export { services, technologies, experiences, testimonials, projects };
