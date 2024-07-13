import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  useToast,
  Container,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const ContactForm = () => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Form submitted.",
      description: "We'll get back to you soon!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container
      maxW="100%"
      p={0}
      bgGradient="linear(to-r, blue.400, purple.500)"
      minHeight="100vh"
      centerContent
    >
      <MotionBox
        maxWidth="500px"
        width="100%"
        m={8}
        p={8}
        borderRadius="xl"
        boxShadow="2xl"
        bg="rgba(255, 255, 255, 0.8)"
        backdropFilter="blur(10px)"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading as="h2" size="xl" textAlign="center" mb={6} color="blue.600">
          Get in Touch
        </Heading>
        <Text textAlign="center" mb={6} color="gray.600">
          We love to hear from you. Fill out the form below to send us a
          message.
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel color="blue.600">Name</FormLabel>
              <Input
                placeholder="Your name"
                as={motion.input}
                whileFocus={{ scale: 1.02 }}
                bg="white"
                borderColor="blue.300"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="blue.600">Email</FormLabel>
              <Input
                type="email"
                placeholder="your@email.com"
                as={motion.input}
                whileFocus={{ scale: 1.02 }}
                bg="white"
                borderColor="blue.300"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="blue.600">Message</FormLabel>
              <Textarea
                placeholder="Your message"
                rows={6}
                as={motion.textarea}
                whileFocus={{ scale: 1.02 }}
                bg="white"
                borderColor="blue.300"
              />
            </FormControl>
            <MotionButton
              type="submit"
              colorScheme="blue"
              width="full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              bg="blue.500"
              color="white"
              _hover={{ bg: "blue.600" }}
            >
              Send Message
            </MotionButton>
          </VStack>
        </form>
      </MotionBox>
    </Container>
  );
};

export default ContactForm;
