import React from 'react';
import { Box, Heading, Grid, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function DeliveredProjects() {
  const deliveredProjects = [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
  ];

  return (
    <MotionBox
    id="delivered-projects"
      p={8}
      bg="yellow.100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Heading mb={4} textAlign="center">
        Delivered Projects
      </Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {deliveredProjects.map((src, index) => (
          <Image key={index} src={src} alt={`Delivered Project ${index + 1}`} />
        ))}
      </Grid>
    </MotionBox>
  );
}

export default DeliveredProjects;
