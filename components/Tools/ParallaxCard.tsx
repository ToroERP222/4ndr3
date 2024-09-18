import { Box, Text, Badge } from "@chakra-ui/react";
import { motion, useTransform, useScroll } from "framer-motion";
import { FC } from "react";

const MotionImage = motion("img");

const ParallaxCard: FC<{ title: string; tag: string; imageUrl: string }> = ({
  title,
  tag,
  imageUrl,
}) => {
  const { scrollY } = useScroll();

  // Parallax effect: use Y-axis transform to move the image as the user scrolls
  const y = useTransform(scrollY, [0, 1000], [0, -200]); // Adjust values as needed for parallax intensity

  return (
    <Box
    as={motion.div}
      position="relative"
      width="640px"
      height="600px"
      overflow="hidden"
      borderRadius="4xl"
      bg="gray.800"
      cursor="pointer"
      style={{borderRadius:'2rem'}}
     
     // Slight zoom of the whole card on hover
      transition="0.3s ease-in-out"
     mx={5}
    >
      {/* Image with parallax effect */}
      <MotionImage
        src={imageUrl}
        alt={title}
        style={{ y ,height:'800px',width:'640px'}} // Directly bind parallax y value to the image itself
     
       
        whileHover={{ scale: 1.1,opacity: 0.8 }} // Zoom in on hover
        transition={{ duration: 0.4 }}
      />

      {/* Badge */}
      <Badge
        position="absolute"
        top={9}
        left={30}
        height={'auto'}
        width={'auto'}
        bgColor="gray"
        p={5}
        
        color="white"
        fontSize={'md'}
        sx={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        }}
        style={{borderRadius:'2rem'}}
        px={5}
      >
        {tag}
      </Badge>

      {/* Title */}
      <Text
        position="absolute"
        bottom={10}
        left={10}
        style={{fontSize:'5rem'}}
        color="white"
        fontWeight="bold"
        sx={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        }}
      >
        {title}
      </Text>
    </Box>
  );
};

export default ParallaxCard;
