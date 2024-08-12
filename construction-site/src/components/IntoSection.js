import React from 'react';
import { Box, Flex, Text, keyframes, useBreakpointValue } from '@chakra-ui/react';
import introBackground from '../assets/intro-background.jpg';

// Keyframes for the existing background animation
const moveBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Keyframes for the zoom-in and zoom-out animation on large screens
const zoomBackground = keyframes`
0% { transform: scale(1); }
50% { transform: scale(1.05); } /* Slightly scale up to avoid extra space */
100% { transform: scale(1); }
`;

const IntroSection = () => {
  // Determine the animation based on screen size
  const backgroundAnimation = useBreakpointValue({
    base: `${moveBackground} 20s linear infinite`, // For small screens, keep the current animation
    lg: `${zoomBackground} 10s ease-in-out infinite`, // For large screens, apply the zoom animation
  });

  return (
    <Box
      id="intro"
      h="100vh"
      bgImage={`url(${introBackground})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
      animation={backgroundAnimation}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
      p={4}
    >
      <Flex direction="column" align="center">
        <Text  fontSize="4xl" fontWeight="bold">Welcome to ambey constructions</Text>
        <Text fontSize="xl" mt={4}>
          Delivering Excellence in Every Project
        </Text>
      </Flex>
    </Box>
  );
};

export default IntroSection;
