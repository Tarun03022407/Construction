import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function WhoWeAre() {
  return (
    <MotionBox
      id="who-we-are"
      p={8}
      bg="gray.100"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <Heading mb={4} textAlign="center">
        Who We Are
      </Heading>
      <Text fontSize="lg" textAlign="center">
        We are a leading construction company committed to delivering high-quality projects that stand the test of time.
      </Text>
    </MotionBox>
  );
}

export default WhoWeAre;
