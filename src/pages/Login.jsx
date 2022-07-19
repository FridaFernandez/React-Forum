import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <Box>
      <Navbar></Navbar>
    <Box
      display={'flex'}
      flexDirection={'column'}
      h={'90vh'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <FormControl
        background="white"
        maxW={"365px"}
        mx={"auto"}
        my={"auto"}
        p={"10px"}
        borderRadius={"10px"}
        pb={'30px'}
        pt={'30px'}
      >
        <FormLabel
          mx={"auto"}
          fontFamily={"Roboto, sans-serif"}
          fontSize={"2em"}
          textAlign={"center"}
           pb={'15px'}
        >
          Welcome to Chaos
        </FormLabel>
      <Box
      pb={'30px'}>
        <Input
          placeholder="Enter your Username"
          type="user"
          boxSizing={"border-box"}
          border={"1px solid rgb(234, 234, 234)"}
          display={"block"}
          fontSize={"1rem"}
          padding={"0.5rem"}
          color={"rgb(52, 73, 94)"}
          width={"95%"}
          m={"8px"}
        />
      </Box>
      <Box
          background={"none"}
          borderRadius={"0.25rem"}
          textDecoration={'none'}
          pb={'30px'}
      >
        <Input
          placeholder="Enter your Email"
          type="email"
          boxSizing={"border-box"}
          border={"1px solid rgb(234, 234, 234)"}
          display={"block"}
          fontSize={"1rem"}
          padding={"0.5rem"}
          color={"rgb(52, 73, 94)"}
          width={"95%"}
          m={"8px"}
        />
      </Box>

        <Button
          backgroundColor={"rgb(255, 102, 0)"}
          w={"100%"}
          border={"1px solid rgb(255, 102, 0)"}
          borderRadius={"0.25rem"}
          color={"white"}
          cursor={"pointer"}
          fontSize={"0.8rem"}
          padding={"0.75rem 0px"}
          transition={"all 200ms ease 0s"}
          textAlign={"center"}
          textTransform={"uppercase"}
          _hover={{
            backgroundColor: 'white',
            color: 'rgb(255, 102, 0)'
          }}
        >
          Enter
        </Button>
      </FormControl>
    </Box>
    </Box>
  );
}

export default Login;
