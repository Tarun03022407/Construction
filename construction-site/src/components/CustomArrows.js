import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const CustomPrevArrow = ({ onClick }) => (
  <IconButton
    aria-label="Previous slide"
    icon={<ChevronLeftIcon />}
    onClick={onClick}
    position="absolute"
    left="0"
    top="50%"
    transform="translateY(-50%)"
    zIndex="10"
    bg="rgba(0,0,0,0.5)"
    color="white"
    _hover={{ bg: "rgba(0,0,0,0.7)" }}
  />
);

const CustomNextArrow = ({ onClick }) => (
  <IconButton
    aria-label="Next slide"
    icon={<ChevronRightIcon />}
    onClick={onClick}
    position="absolute"
    right="0"
    top="50%"
    transform="translateY(-50%)"
    zIndex="10"
    bg="rgba(0,0,0,0.5)"
    color="white"
    _hover={{ bg: "rgba(0,0,0,0.7)" }}
  />
);

export { CustomPrevArrow, CustomNextArrow };
