
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.2, // Trigger animation when 20% of the section is in view
  });

  return (
    <Box
      bg="white"
      py={10}
      borderBottom="1px"
      borderColor="gray.200"
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <Container maxW="container.md" textAlign="center">
        <VStack spacing={6}>
          <Heading as="h1" size="xl" color="gray.800">
            Dr. Vipin Jain
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Dr. Vipin Jain is a highly skilled general, minimally invasive, and
            bariatric surgeon. He earned his M.B.B.S. and M.S. degrees,
            graduating with first-class honors from the University of Rajasthan
            in 2000, followed by advanced surgical training at JLN Medical
            College. His outstanding performance earned him several accolades.
            Dr. Jain holds fellowships in FMAS, FIAGES, and FALS, and is a life
            member of esteemed organizations such as IAGES, AMASI, and RAMAS.
          </Text>
          <Button colorScheme="teal" size="md">
            Learn More
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default HeroSection;
