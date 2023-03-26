export interface Experience {
  position: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  site: string;
  more?: string;
}

export const workExperience: Experience[] = [
  {
    position: "Senior Frontend Developer",
    company: "CafeDX",
    location: "Tehran, Iran",
    type: "Full-Time",
    duration: "2021 - present",
    site: "https://cafedx.com",
  },
  {
    position: "Senior Frontend Developer",
    company: "Mahsan",
    location: "Tehran, Iran",
    type: "Full-Time",
    duration: "2019 - 2021",
    site: "https://mahsan.co",
  },
  {
    position: "Frontend Developer",
    company: "FanavarTech",
    location: "Tehran, Iran",
    type: "Full-Time",
    duration: "2018 - 2019",
    site: "https://fanavartech.com",
  },
  {
    position: "Junior Frontend Developer",
    company: "Webhoma",
    location: "Tehran, Iran",
    type: "Full-Time",
    duration: "2016 - 2018",
    site: "",
  },
  {
    position: "Teacher Assistant",
    company: "Malek Ashtar University of Technology",
    location: "Tehran, Iran",
    type: "Full-Time",
    duration: "2014 - 2016",
    site: "",
  },
];

export const educations: Experience[] = [
  {
    position: "Master of Information Technology",
    company: "Malek Ashtar University of Technology",
    location: "Tehran, Iran",
    type: "Full-Time",
    duration: "2014 - 2017",
    site: "",
    more: "Highest ranking student",
  },
  {
    position: "Bachelor of Software Engineering",
    company: "University of Mazandaran",
    location: "Mazandaran, Iran",
    type: "Full-Time",
    duration: "2009 - 2013",
    site: "",
  },
];
export interface Skill {
  title: string;
  items: string;
}
export const skills: Skill[] = [
  {
    title: "Languages",
    items: "JavaScript, TypeScript, HTML, CSS",
  },
  {
    title: "JS Libraries & Frameworks",
    items: "React, Next.js, Node.js, Redux, Redux Toolkit, Zustand, Zod",
  },
  {
    title: "UI Libraries & Frameworks",
    items:
      "SASS, Emotion, Styled Component, Tailwind, Bootstrap, MUI, Storybook",
  },
  {
    title: "Web Services",
    items: "REST API, Axios, React Query, Websocket, GraphQl, ApolloClient",
  },
  {
    title: "Testing",
    items: "Jest, Testing Library, Vitest, MSW",
  },
  {
    title: "Version Control Systems",
    items: "Git, GitHub, GitLab",
  },
  {
    title: "Tools",
    items: "Webpack, Vite, NPM, Yarn, Sentry, SonarQube",
  },
  {
    title: "Methodology",
    items: "Agile, Scrum",
  },
  {
    title: "Miscellaneous",
    items: "Figma, Design System, Secure Development",
  },
  {
    title: "Soft Skills",
    items:
      "Teamwork, Creativity, Problem Solving, Knowledge Sharing, Time Management",
  },
];
