import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Characteristics } from "../components/Characteristics";
import { Header } from "../components/Header";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });

  return (
    <Flex direction="column" mb="2.5rem">
      <Header />
      <Banner />
      <Characteristics />
      <Box
        height="2px"
        bg="gray.600"
        w="90px"
        m="0 auto"
        mt={{ base: "2.25rem", lg: "5rem" }}
      />
      <Text
        m="0 auto"
        fontSize={{ base: "1.25rem", lg: "2.25rem" }}
        textAlign="center"
        fontWeight="500"
        mt={{ base: "1.5rem", lg: "3.25rem" }}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>
    </Flex>
  );
}
