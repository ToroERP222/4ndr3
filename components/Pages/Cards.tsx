import { Box, Grid } from "@chakra-ui/react";
import ParallaxCard from "../Tools/ParallaxCard";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
    <Box
      display="flex"
      flexDirection={'row'}
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="black"
      px={4} // Adds padding for better responsiveness
    >
    
        {/* Example cards */}
        <ParallaxCard
          title="Proyecto Irreverente"
          tag="Next.js/Typescript"
          imageUrl="logoirreverente.png"
        />

        <ParallaxCard
          title="AI27"
          tag="Python"
          imageUrl="ai27.jpg"
        />
        
    </Box>
    <Box
    mt={0}
     display="flex"
     flexDirection={'row'}
     justifyContent="center"
     alignItems="center"
     height="100vh"
     bg="black"
     px={4}>
      <ParallaxCard
          title="Cerveceria Toro"
          tag="React.js/MongoDB"
          imageUrl="toro.png"
        />
        <ParallaxCard
          title="Freelance"
          tag="python/react.js/aws"
          imageUrl="freelance.jpg"
        />
     
    </Box>
    </>
  );
};

export default Home;
