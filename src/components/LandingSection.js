import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullScreenSection from "./FullScreenSection";
import {
  faReact,
} from "@fortawesome/free-brands-svg-icons";
const greeting = "Hello, I am Bhanu Prakash Sai!";
const bio1 = "Computer Science Student";
const bio2 = "Specialised in React";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  > 

    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center">
        <Avatar src="https://bhanuprakaash.github.io/img/bhanu_final_pic.jpeg"
              size="2xl"
              name = "Bhanu Prakash Sai"
            />
            <Heading fontFamily='Open Sans' as="h4" size="md" noOfLines={1}>{greeting}</Heading>
      </VStack>
      <VStack spacing={8}>
        <Heading fontFamily='Open Sans' as="h1" size="2xl" noOfLines={1}>{bio1}</Heading>
        <Heading fontFamily='Open Sans' as="h1" size="2xl" noOfLines={1}>{bio2} <FontAwesomeIcon icon={faReact} size="2px"/></Heading>
      </VStack>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
