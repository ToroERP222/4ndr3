import { Box, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";

// Create a motion component for the paragraph tag
const MotionText = motion("p");

const Home: FC = () => {
  return (
    <Box
      height="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="black"
      color="white"
      px={4} // Add some padding for small screens
    >
      <Stack spacing={4} textAlign="center">
        {/* Motion for AVAILABLE FOR FREELANCE */}
        <MotionText
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontSize: "16px", // Chakra's "md" size for font
            fontWeight: 300,  // Chakra's "light" weight
            letterSpacing: "wider",
          }}
        >
          ⬤ AVAILABLE FOR FREELANCE OR REMOTE WORK
        </MotionText>

        {/* Motion for FULL STACK */}
        <MotionText
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)", // Responsive font size using clamp()
            fontWeight: "bold",
            textShadow: '2px 2px 4px rgba(255, 255, 255, 0.4)'
          }}
         
        >
          FULL STACK
        </MotionText>

        {/* Motion for DEVELOPER */}
        <MotionText
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)", // Responsive font size using clamp()
            fontWeight: "bold",
            textShadow: '2px 2px 4px rgba(255, 255, 255, 0.4)',
            marginTop:'-20px'
          }}
        >
          DEVELOPER
        </MotionText>
      </Stack>
    </Box>
  );
};

export default Home;
