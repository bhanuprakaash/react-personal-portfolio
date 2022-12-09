import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Ware House Management",
    description:
      "A java console application where we can create computers, smartphones, laptops with available information such as brand name ,model name, price etc.",
    getImageSrc: () => require("../images/warehouse.webp"),
    url:"https://github.com/bhanuprakaash/Ware-House-Management",
  },
  {
    title: "ChatBot in College Website",
    description:
      "A python application developed for a college website to answer the queries of students and parents about college. This project was developed by using chatterbot package.",
    getImageSrc: () => require("../images/chatbot.png"),
    url:"https://github.com/bhanuprakaash/ChatBot-for-college-website",
  },
  {
    title: "Personal Portfolio",
    description:
      "The collection of web pages to represent myself such as work, skills, projects and experience etc. using HTML and CSS",
    getImageSrc: () => require("../images/bhanuprofile.png"),
    url:"https://bhanuprakaash.github.io/index.html",
  },
  {
    title: "React To-Do App",
    description:
      "A simple react to do app using the fundamentals of ReactJS, where we can add, edit, delete the tasks and also it shows the completed tasks",
    getImageSrc: () => require("../images/react.png"),
    url:"",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#2D3748"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" fontFamily='Open Sans' id="projects-section">
        Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
