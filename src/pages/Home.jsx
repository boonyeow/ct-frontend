import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Heading,
  Image,
  Spacer,
  Button,
} from "@chakra-ui/react";

const Topic = ({ children }) => {
  return (
    <Flex
      borderRadius="3xl"
      height="180px"
      color="#056dae"
      bg="#eff3f8"
      alignItems="center"
      justifyContent="center"
      border="1px solid"
      borderColor="#eff3f8"
      transition="transform .6s cubic-bezier(.075,.82,.165,1),border-color
          .3s cubic-bezier(.165,.84,.44,1)"
      _hover={{ borderColor: "#056dae" }}>
      {children}
    </Flex>
  );
};

const Home = () => {
  return (
    <Box w="4xl" py="12" px="6" m="auto">
      <Heading>Topics</Heading>
      <SimpleGrid columns={3} gap={8} mt={6}>
        <Topic>
          <Text fontWeight="semibold" fontSize="lg">
            Topic A
          </Text>
        </Topic>
        <Topic>
          <Text fontWeight="semibold" fontSize="lg">
            Topic B
          </Text>
        </Topic>
      </SimpleGrid>
    </Box>
  );
};

export default Home;
