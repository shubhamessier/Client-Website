import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Flex align="center" justify="center" h="80vh">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <form>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Your name" />
          </FormControl>

          <FormControl mt={4} id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Your email" />
          </FormControl>

          <FormControl mt={4} id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your message" />
          </FormControl>

          <Button colorScheme="blue" width="full" mt={4} type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactUs;
