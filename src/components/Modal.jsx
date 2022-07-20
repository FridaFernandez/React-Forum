import { Box, Modal, ModalContent, Button,ModalOverlay,ModalHeader, ModalBody,ModalFooter,ModalCloseButton, border} from "@chakra-ui/react";
import React from "react";
import { useDisclosure,Textarea, Input} from '@chakra-ui/react'

function ModalPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Box position={"fixed"} bottom={"25px"} right={"25px"}>
        <Button 
          onClick={onOpen}
          backgroundColor={"#ff6600"} 
          borderRadius={"30px"} color={"white"} 
          fontSize={"30px"} 
          width={"55px"} 
          height={"55px"}
          _active={{backgroundColor:"#ff6600"}}
          _hover={{backgroundColor:"#ff6600"}}
        >+</Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent margin={"150px"} borderRadius={"none"}>
          <ModalHeader fontWeight={"normal"} fontSize={"25px"}>New Discussion</ModalHeader>
          <ModalCloseButton />
          <Input _focus={{borderColor:"#ff6600", outline:"#ff6600", boxShadow:"none"}} _active={{borderColor:"#ff6600", outline:"#ff6600", boxShadow:"none"}} width={"90%"} margin={"auto"} placeholder='Discussion title' />
          <Textarea _focus={{borderColor:"#ff6600", outline:"#ff6600", boxShadow:"none"}} _active={{borderColor:"#ff6600", outline:"#ff6600", boxShadow:"none"}} width={"90%"} margin={"auto"} marginTop={"20px"} placeholder='Body title' />
          <ModalFooter>
            <Button _active={{backgroundColor:"white"}} _hover={{backgroundColor:"white", color:"#ff6600", outline:"1px solid #ff6600"}} fontWeight={"normal"} width={"100%"} fontSize={"13px"} backgroundColor={"#ff6600"} color={"white"}>
              CREATE EMPLOYEE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default ModalPage;
