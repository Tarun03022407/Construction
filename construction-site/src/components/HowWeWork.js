import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function HowWeWork() {
  return (
    <MotionBox
      id="how-we-work"
      p={8}
      bg="green.100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Heading mb={4} textAlign="center">
        How We Work
      </Heading>
      <Text fontSize="lg" textAlign="center">
        Our process is transparent and efficient, ensuring projects are completed on time and within budget.
      </Text>
    </MotionBox>
  );
}

export default HowWeWork;
