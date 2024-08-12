import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Create a motion-enabled Box component
const MotionBox = motion(Box);

function WhoWeAre() {
  return (
    <MotionBox
      id="who-we-are"
      p={8}
      bg="gray.100"
      initial={{ rotate: 0 }} // Initial rotation
      animate={{ rotate: 360 }} // Rotate to 360 degrees
      transition={{ duration: 3, repeatType: 'loop', ease: 'linear' }} // Continuous rotation
      textAlign="center"
    >
      <Heading mb={4}>
        Who We Are
      </Heading>
      <Text fontSize="lg">
        At Ambey Constructions, we are dedicated to crafting exceptional spaces that stand the test of time. With decades of experience in the construction industry, we specialize in delivering innovative solutions for residential, commercial, and industrial projects. Our commitment to excellence is evident in every detail of our work—from the initial design phase to the final touches.

        Our team of skilled professionals brings a wealth of knowledge and expertise, ensuring that each project is completed with the highest standards of quality and safety. We take pride in our ability to transform visions into reality, delivering projects on time and within budget while exceeding our clients’ expectations.

        At Ambey Constructions, we believe in building more than just structures; we create environments that enhance the lives of those who use them. Whether it's a custom home, a commercial complex, or a renovation project, we approach each endeavor with passion and dedication, making us your trusted partner in construction.
      </Text>
    </MotionBox>
  );
}

export default WhoWeAre;
