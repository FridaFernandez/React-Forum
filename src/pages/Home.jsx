import { Box,Heading } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <Box>
      <Navbar></Navbar>
      <Heading>Home</Heading>
    </Box>
  );
}

export default Home;
