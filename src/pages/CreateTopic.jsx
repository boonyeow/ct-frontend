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
import { useCallback, useEffect, useState } from "react";

import Dropzone, { useDropzone } from "react-dropzone";

const CreateTopic = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setFiles(acceptedFiles);
  }, []);

  const [topicName, setTopicName] = useState("");
  const [urls, setUrls] = useState("");
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleTopicNameChange = (e) => {
    setTopicName(e.target.value);
  };

  const handleUrlsChange = (e) => {
    setUrls(e.target.value);
  };

  // const onDrop = (acceptedFiles) => {
  //   setFiles(acceptedFiles);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");

    const formData = new FormData();
    formData.append("topicName", topicName);
    formData.append("urls", urls);

    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    try {
      const response = await fetch("http://127.0.0.1:4100/process", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Upload successful");
        setTopicName("");
        setUrls("");
        setFiles([]);
      } else {
        console.log("Upload failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    console.log("ended");
  };

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <Box w="4xl" py="12" px="6" m="auto">
      <Heading>Create a new topic</Heading>
      <VStack gap={4} mt={4}>
        <FormControl>
          <FormLabel>Topic name</FormLabel>
          <Input
            type="text"
            p={8}
            borderRadius="3xl"
            bg="#eff3f8"
            value={topicName}
            onChange={handleTopicNameChange}
            placeholder="API Documents"
          />
        </FormControl>

        <FormControl>
          <FormLabel>URLs</FormLabel>
          <Textarea
            h="250px"
            bg="#eff3f8"
            borderRadius="3xl"
            placeholder={`https://url1.com\nhttps://url2.com\nhttps://url3.com`}
            p={8}
            value={urls}
            onChange={handleUrlsChange}
          ></Textarea>
          <FormHelperText>
            *Please separate multiple links with a new line
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Upload files</FormLabel>
          <Flex {...getRootProps()} h="150px" bg="#eff3f8" borderRadius="3xl" alignItems={"center"} justifyContent={{"center"}}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </Flex>
        </FormControl>
      </VStack>
      <Flex w="full" justifyContent="flex-end" mt={8}>
        <Button
          bg="#002d72"
          color="white"
          _hover={{ bg: "#002d72" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export default CreateTopic;
