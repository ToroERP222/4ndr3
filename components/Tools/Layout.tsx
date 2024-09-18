import { ReactNode } from "react";
import Navbar from "./Navbar"; // import the Navbar component
import Footer from "./Footer"; // import the Footer component
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box minH="100vh" display="flex" bgColor={'black'} flexDirection="column">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <Box as="main" flex="1" p={4}>
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
