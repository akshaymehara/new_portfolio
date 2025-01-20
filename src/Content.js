// import images
import Hero_person from "./assets/images/Hero/person.png";

import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import azure from "./assets/images/Skills/azure.png";
import gcp from "./assets/images/Skills/gcp.png";
import aws from "./assets/images/Skills/aws.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
console.log("🚀 ~ project1:", project1);
import project2 from "./assets/images/projects/img2.png";
console.log("🚀 ~ project2:", project2);
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "AKSHAY",
    LastName: "MEHARA",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experience in Web development",
      },
      {
        count: "25+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Node js",
        para: "Javascript Runtime Server",
        logo: nodejs,
      },
      {
        name: "React js",
        para: "Javascript Frontend Library",
        logo: reactjs,
      },
      {
        name: "Python",
        para: "Interpreted, versatile, and OOPs",
        logo: python,
      },
      {
        name: "Microsoft Azure",
        para: "Cloud Platform by Microsoft",
        logo: azure,
      },
      {
        name: "Google Cloud Platform",
        para: "Cloud Platform by Google",
        logo: gcp,
      },
      {
        name: "Amazon Web Service",
        para: "Cloud Platform by Amazon",
        logo: aws,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Delivering responsive, user-friendly websites with modern designs, fast performance, and SEO optimization.",
        logo: services_logo1,
      },
      {
        title: "Devops Engineer",
        para: "Streamlining software delivery with CI/CD, cloud management, automation, and robust system monitoring.",
        logo: services_logo2,
      },
      {
        title: "Cloud Architect",
        para: "Designing scalable, secure cloud solutions with cost optimization, migration strategies, and automation.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "All Projects",
    image: person_project,
    project_content: [
      {
        title: "Shopy",
        image: project1,
        link: "https://akshay-mehara-shopy.netlify.app/",
      },
      {
        title: "Qkart",
        image: project2,
        link: "https://akshay-mehara-qkart.netlify.app/",
      },
      {
        title: "Qtrip",
        image: project3,
        link: "https://akshay-mehara-qtrip.netlify.app/",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“The website they built for us is stunning and fast! Our traffic increased by 40% within a month of launch.”",
        img: avatar1,
        name: "John Green",
      },
      {
        review:
          "“His attention to detail and expertise in responsive design made our site look perfect on all devices”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“His cloud migration strategy was seamless, cutting costs by 30% while improving system reliability.”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“With his CI/CD pipelines, our deployment times went from hours to minutes—an absolute game-changer!”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I specialize in crafting modern websites, automating software delivery pipelines, and designing secure, scalable cloud architectures. Whether you're a startup or an enterprise, I bring expertise, efficiency, and creativity to your projects. Let's turn your vision into reality!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "akshaymehara111@hotmail.com",
        icon: GrMail,
        link: "mailto:akshaymehara111@hotmail.com",
      },
      {
        text: "+91 0000000000",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "akshaymehara",
        icon: BsInstagram,
        link: "https://www.instagram.com/akshaymehara/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
