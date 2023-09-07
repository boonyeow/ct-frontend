import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import Dropzone from "react-dropzone";

const CreateTopic = () => {
  return (
    <Box w="4xl" py="12" px="6" m="auto">
      <Heading>Create a new topic</Heading>
      <VStack gap={4} mt={4}>
        <FormControl>
          <FormLabel>Topic name</FormLabel>
          <Input type="text" p={8} borderRadius="3xl" bg="#eff3f8" />
        </FormControl>

        <FormControl>
          <FormLabel>URLs</FormLabel>
          <Textarea
            h="250px"
            bg="#eff3f8"
            borderRadius="3xl"
            placeholder="https://url1.com,https://url2.com"
            p={8}></Textarea>
          <FormHelperText>
            *Please separate multiple links with comma
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Upload files</FormLabel>
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <Box as="section" borderRadius="3xl" bg="#eff3f8">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </Box>
            )}
          </Dropzone>
        </FormControl>
      </VStack>
      <Flex w="full" justifyContent="flex-end" mt={8}>
        <Button bg="#002d72" color="white" _hover={{ bg: "#002d72" }}>
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export default CreateTopic;
