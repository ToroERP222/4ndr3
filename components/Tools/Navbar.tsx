import { Box, Flex, Text, Icon, Button, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for the full-screen menu
  const [buttonText, setButtonText] = useState('Close');

  // Adjusts whether to show text or an icon for the menu button on smaller screens
  const menuButtonDisplay = useBreakpointValue({ base: "icon", md: "text" });

  return (
    <Box>
      {/* Navbar */}
      <Box 
        as="nav" 
        bg="black" 
        color="white" 
        p={4} 
        position="sticky" 
        top={0} 
        zIndex={1000}  
        boxShadow="lg"
      >
        <Flex justify="space-between" align="center">
          {/* Logo Section */}
          <Box display="flex" alignItems="center">
            <Icon viewBox="0 0 200 200" boxSize={['30px', '40px', '50px']} color="white" mx={2}>
              <path
                fill="currentColor"
                d="M100 40L113 86h50l-40 29 15 46-40-30-40 30 15-46-40-29h50z"
              />
            </Icon>
            <Text
              fontSize={['2xl', '3xl', '4xl']}
              fontWeight="bold"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bg: "white",
                bottom: "-4px",
                left: 0,
                transformOrigin: "center",
                scaleX: isHovered ? 1 : 0,
                transition: "transform 0.3s ease-in-out",
              }}
              cursor="pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              as={motion.div}
              whileHover={{ scale: 1 }}
            >
              {isHovered ? "4ndr3" : "Andre"}
            </Text>
          </Box>

          {/* Menu Button */}
          <Flex align="center">
            {menuButtonDisplay === "text" ? (
              <Text 
                fontSize="lg" 
                cursor="pointer" 
                onClick={() => setMenuOpen(true)}
              >
                [MENU]
              </Text>
            ) : (
              <Icon
                as={HamburgerIcon}
                boxSize="8"
                cursor="pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </Flex>
        </Flex>
      </Box>

      {/* Full-Screen Overlay Menu */}
      {menuOpen && (
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="black"
          color="white"
          zIndex={1100}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          px={4} // Adds padding on smaller screens
        >
          {/* Close Button */}
          <Button
            as={motion.button}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            colorScheme="black"
            variant="link"
            position="absolute"
            top="3rem"
            right="3rem"
            onMouseEnter={() => setButtonText('X')}
            onMouseLeave={() => setButtonText('Close')}
            onClick={() => setMenuOpen(false)}
          >
            [{buttonText}]
          </Button>

          <Text fontSize={['4xl', '6xl', '8xl']} fontWeight="bold" mb={1}>
            WORK
          </Text>
          <Text fontSize={['4xl', '6xl', '8xl']} fontWeight="bold" mb={1}>
            ABOUT
          </Text>
          <Text fontSize={['4xl', '6xl', '8xl']} fontWeight="bold" mb={1}>
            STACK
          </Text>
          <Text fontSize={['4xl', '6xl', '8xl']} fontWeight="bold" mb={1}>
            CONTACT
          </Text>
        </Box>
      )}
    </Box>
  );
}
