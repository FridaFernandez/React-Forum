import { Box,Heading,Modal,
  ModalContent,
  Button, } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import ModalPage from "../components/Modal";
function Home() {
  return (
    <Box>
      <Navbar></Navbar>
      <Heading>Home</Heading>
      <ModalPage></ModalPage>
    </Box>
  );
}

export default Home;
