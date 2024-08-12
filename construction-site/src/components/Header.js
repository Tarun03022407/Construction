import React, { useState } from 'react';
import { Box, Flex, IconButton, Link, VStack, HStack, CloseButton, useDisclosure, Spacer, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="teal.900"
      zIndex="10"
      boxShadow="md"
    >
      <Flex
        as="nav"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        align="center"
        maxW="1200px"
        margin="auto"
      >
        {/* Desktop Menu */}
        <HStack display={{ base: 'none', md: 'flex' }} w="100%">
          <ScrollLink to="intro" smooth duration={500}>
            <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
              Intro
            </Link>
          </ScrollLink>
          <Spacer />
          <ScrollLink to="who-we-are" smooth duration={500}>
            <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
              Who We Are
            </Link>
          </ScrollLink>
          <Spacer />
          <ScrollLink to="how-we-work" smooth duration={500}>
            <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
              How We Work
            </Link>
          </ScrollLink>
          <Spacer />
          <ScrollLink to="delivered-projects" smooth duration={500}>
            <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
              Delivered Projects
            </Link>
          </ScrollLink>
          <Spacer />
          <ScrollLink to="ongoing-projects" smooth duration={500}>
            <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
              Ongoing Projects
            </Link>
          </ScrollLink>
          <Spacer />
          <ScrollLink to="inquiry" smooth duration={500}>
            <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
              Inquiry
            </Link>
          </ScrollLink>
        </HStack>

        {/* Mobile Menu */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          color="white.700"
          _hover={{ bg: "teal.700" }}
          _focus={{ boxShadow: "outline" }}
        />

        <MotionBox
          display={isOpen ? 'block' : 'none'}
          pos="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="teal.600"
          zIndex={20}
          initial={{ opacity: 0, x: '-100vw' }}
          animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100vw' }}
          transition={{ duration: 0.3 }}
        >
          <Flex justify="flex-end" p={5}>
            <CloseButton color="white" onClick={onClose} />
          </Flex>

          <MotionVStack
            spacing={8}
            align="center"
            justify="center"
            height="80vh"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <ScrollLink to="intro" smooth duration={500} onClick={onClose}>
              <Text color="white" fontSize="2xl" _hover={{ color: 'gray.200' }}>Intro</Text>
            </ScrollLink>
            <ScrollLink to="who-we-are" smooth duration={500} onClick={onClose}>
              <Text color="white" fontSize="2xl" _hover={{ color: 'gray.200' }}>Who We Are</Text>
            </ScrollLink>
            <ScrollLink to="how-we-work" smooth duration={500} onClick={onClose}>
              <Text color="white" fontSize="2xl" _hover={{ color: 'gray.200' }}>How We Work</Text>
            </ScrollLink>
            <ScrollLink to="delivered-projects" smooth duration={500} onClick={onClose}>
              <Text color="white" fontSize="2xl" _hover={{ color: 'gray.200' }}>Delivered Projects</Text>
            </ScrollLink>
            <ScrollLink to="ongoing-projects" smooth duration={500} onClick={onClose}>
              <Text color="white" fontSize="2xl" _hover={{ color: 'gray.200' }}>Ongoing Projects</Text>
            </ScrollLink>
            <ScrollLink to="inquiry" smooth duration={500} onClick={onClose}>
              <Text color="white" fontSize="2xl" _hover={{ color: 'gray.200' }}>Inquiry</Text>
            </ScrollLink>
          </MotionVStack>
        </MotionBox>
      </Flex>
    </Box>
  );
}

export default Header;
