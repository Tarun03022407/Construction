import React from 'react';
import { Box, Text, Image, VStack, useBreakpointValue } from '@chakra-ui/react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css'; // Import Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick Carousel theme CSS
import { CustomPrevArrow, CustomNextArrow } from './CustomArrows';
import consultationImage from '../assets/consultation.jpg';
// Import other images as needed

const processSteps = [
  {
    title: 'Initial Consultation',
    description: 'Start with a detailed consultation to understand your needs, goals, and budget. Tailor our services to meet your specific requirements and expectations.',
    image: consultationImage,
  },
  {
    title: 'Comprehensive Planning',
    description: 'Develop a comprehensive plan outlining every aspect of the project, using cutting-edge technology and industry best practices to create detailed plans and timelines.',
    // image: planningImage
  },
  {
    title: 'Design and Development',
    description: 'Transform your ideas into detailed blueprints and 3D models, focusing on functional and aesthetically pleasing designs that align with your vision.',
    // image: designImage
  },
  {
    title: 'Transparent Communication',
    description: 'Maintain open lines of communication to keep you informed about progress, changes, and any potential challenges, building strong relationships based on trust and transparency.',
    // image: communicationImage
  },
  {
    title: 'Quality Construction',
    description: 'Use the best materials and techniques to ensure every aspect of the build meets our rigorous quality standards, with a focus on safety and compliance with regulations.',
    // image: qualityImage
  },
  {
    title: 'Timely Delivery',
    description: 'Complete projects on time and within budget, with efficient project management practices to meet milestones and address any issues promptly.',
    // image: deliveryImage
  },
  {
    title: 'Post-Completion Support',
    description: 'Offer post-construction support to address any concerns or adjustments needed, ensuring satisfaction beyond project completion.',
    // image: supportImage
  },
  {
    title: 'Sustainability and Innovation',
    description: 'Incorporate sustainable practices and innovative solutions to minimize environmental impact and enhance the longevity of your project.',
    // image: sustainabilityImage
  }
];

const HowWeWorkSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: useBreakpointValue({ base: 1, md: 2 }), // Show 1 card on small screens and 2 on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Box maxW="1200px" mx="auto" overflow="hidden" position="relative">
      <Text fontSize="3xl" fontWeight="bold" mb={6} textAlign="center">
        How We Work
      </Text>
      <Slider {...settings}>
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1.2, opacity: 0 }} // Start with zoomed-in and transparent
            animate={{ scale: 1, opacity: 1 }} // End with normal scale and fully opaque
            transition={{ duration: 1 }} // Duration of the animation
          >
            <VStack
              spacing={4}
              p={5}
              borderWidth={1}
              borderRadius="md"
              boxShadow="md"
              textAlign="center"
              bg="white"
              color="black"
              minH="300px" // Ensuring all cards have equal height
              minW="300px" // Ensuring all cards have equal width
            >
              <Image
                borderRadius="md"
                boxSize="150px"
                objectFit="cover"
                src={step.image}
                alt={step.title}
              />
              <Text fontSize="xl" fontWeight="bold">
                {step.title}
              </Text>
              <Text>{step.description}</Text>
            </VStack>
          </motion.div>
        ))}
      </Slider>
    </Box>
  );
};

export default HowWeWorkSection;
