import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJsSquare,
  FaLinkedin,
  FaReact,
  FaNpm,
  FaMobile,
} from "react-icons/fa";
import { BiLogoRedux, BiLogoGit , 
  BiLogoBootstrap, 
  BiLogoSass , BiLogoTypescript } from "react-icons/bi";
import {  DiPython, DiMongodb} from "react-icons/di"
import { GoCommandPalette } from "react-icons/go";
import { TbMobiledata } from "react-icons/tb";
import Pneumonia from "./assets/Pneumonia.png";
import task from "./assets/task.png";
import cvd from "./assets/Cvd.png";
import chat from "./assets/chats.png";
import works from "./assets/works.png";

export const navPages = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "Skills", link: "#skills" },
  { id: 5, name: "About me", link: "#about_me" },
  { id: 3, name: "Projects", link: "#projects" },
  { id: 4, name: "Certificates", link: "#certificates" },
  { id: 6, name: "Contact", link: "#contact" },
];

export const social = [
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/Ananya-Bohare",
    target: "_blank",
  },
  { id: 3, icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ananya-bohare-67763b234/" , target: "_blank",},
  { id: 1, icon: <FaInstagram />, link: "" }
];

export const skills = [
  { id: 1, icon: <FaHtml5 />, text: "HTML5" },
  { id: 2, icon: <FaCss3 />, text: "CSS3" },
  { id: 3, icon: <FaJsSquare />, text: "JavaScript (ES6)" },
  { id: 5, icon: <FaReact />, text: "React.js" },
  { id: 6, icon: <BiLogoRedux />, text: "Redux Toolkit" },
  { id: 7, icon: <BiLogoBootstrap />, text: "Bootstrap" },
  { id: 8, icon: <BiLogoSass />, text: "Sass" },
  { id: 9, icon: <BiLogoGit />, text: "Git" },
  { id: 10, icon: <FaGithub />, text: "Github" },
  { id: 11, icon: <TbMobiledata />, text: "RESTful API's" },
  { id: 12, icon: <BiLogoTypescript />, text: "Typescript" },
  { id: 13, icon: <FaMobile />, text: "Responsive Designs" },
  { id: 14, icon: <FaNpm />, text: "Package managers" },
  { id: 15, icon: <DiPython />, text: "Python" },  // Added Python
  { id: 16, icon: <DiMongodb />, text: "MongoDB" }
];
export const projects=[
  {
    id:1 ,
    img: Pneumonia ,
    title:"Pneumonia Detection using CNN" ,
    liveDemo:"#" ,
    repoUrl:"#" ,
    description:"A convolutional neural network (CNN) model for detecting pneumonia from chest X-ray images with 89% accuracy."
  } ,
  {
    id:2 ,
    img: chat ,
    title:"CampusConnect Chatbot" ,
    liveDemo:"#" ,
    repoUrl:"#" ,
    description:"A chatbot designed to connect students with administrative staff for various tasks like scholarship forms and document queries."
  } ,
  {
    id:3 ,
    img: cvd ,
    title:"Cardiovascular Disease Recognition using CNN" ,
    liveDemo:"#" ,
    repoUrl:"#" ,
    description:"A CNN-based system to detect cardiovascular diseases with high precision and recall, aiding in early diagnosis."
  } ,
  {
    id:4 ,
    img: works,
    title:"AdventureWorks Cycles Sales Analysis Dashboard" ,
    liveDemo:"" ,
    repoUrl:"#" ,
    description:"Created interactive dashboards with Power BI for analyzing sales trends and customer behavior, improving business decisions."
  },
  {
    id:5 ,
    img: task,
    title:"Task Management App" ,
    liveDemo:"#" ,
    repoUrl:"#" ,
    description:"A task management tool for real-time updates, task assignment, and team management."
  }
]
