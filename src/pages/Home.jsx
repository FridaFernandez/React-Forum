import { Box,Heading,Modal,
  ModalContent,
  Button,UnorderedList,ListItem ,Text,Link } from "@chakra-ui/react";

import React from "react";
import Navbar from "../components/Navbar";
import ModalPage from "../components/Modal";
function Home() {
  return (
    <Box>
      <Navbar></Navbar>
      <Box width={"68%"} margin={"auto"} >
        <UnorderedList listStyleType={"none"}>
          <ListItem backgroundColor={"white"} padding={"18px"} marginBottom={"2px"}>
            <Link as={"a"} fontSize={"15px"} _hover={{textDecoration:"none"}}>How kill to Christopher</Link> <br />
            <Text as={"span"} fontSize={"13px"} color={"rgb(153, 153, 153);"}>by condef5 </Text>
            <Text as={"span"} fontSize={"13px"} color={"rgb(153, 153, 153);"}>13/6/2019| </Text>
            <Text as={"span"} fontSize={"13px"} color={"rgb(153, 153, 153);"}>1 comments</Text>
          </ListItem>
          <ListItem backgroundColor={"white"} padding={"18px"} marginBottom={"2px"}>
            <Link as={"a"} fontSize={"15px"}_hover={{textDecoration:"none"}}>How kill to Christopher</Link> <br />
            <Text as={"span"} fontSize={"13px"} color={"rgb(153, 153, 153);"}>by condef5 </Text>
            <Text as={"span"} fontSize={"13px"} color={"rgb(153, 153, 153);"}>13/6/2019| </Text>
            <Text as={"span"} fontSize={"13px"} color={"rgb(153, 153, 153);"}>1 comments</Text>
          </ListItem>
          <ListItem backgroundColor={"white"}padding={"18px"} marginBottom={"2px"}>
            <Link as={"a"} fontSize={"15px"}_hover={{textDecoration:"none"}}>How kill to Christopher</Link> <br />
            <Text as={"span"} fontSize={"13px"} color={"rgb(153, 153, 153);"}>by condef5 </Text>
            <Text as={"span"} fontSize={"13px"} color={"rgb(153, 153, 153);"}>13/6/2019| </Text>
            <Text as={"span"} fontSize={"13px"} color={"rgb(153, 153, 153);"}>1 comments</Text>
          </ListItem>
        </UnorderedList>
      </Box>
      <ModalPage></ModalPage>
    </Box>
  );
}

export default Home;
