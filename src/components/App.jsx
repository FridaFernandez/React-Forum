import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import theme from "./Theme";

import Login from "../pages/Login";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const linkStyles = {
  color: "#ffffffcc",
  transition: "color 0.15s",
  lineHeight: "24px",
  _hover: { color: "#ffffff" },
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
