import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";

export default function ContinentPage() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });

  return (
    <Flex direction="column" mb={{ base: "1.5rem", lg: "2.5rem" }}>
      <Header showBackButton />
      <ContinentBanner />
      <Flex
        width="100%"
        maxW="1160px"
        mt={{ base: "1.5rem", lg: "5rem" }}
        mx="auto"
        px="1rem"
      >
        <SimpleGrid
          flex="1"
          columnGap="20"
          rowGap="4"
          minChildWidth={{ base: "343px", lg: "490px" }}
        >
          <Text
            width="100%"
            maxW="600px"
            fontSize={{ base: "sm", lg: "2xl" }}
            lineHeight={{ base: "1.5", lg: "9" }}
            align="justify"
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex justify="center" alignItems="center">
            <Flex
              direction="column"
              alignItems={{ base: "flex-start", lg: "center" }}
            >
              <Text
                fontSize={{ base: "2xl", lg: "5xl" }}
                fontWeight="semibold"
                color="yellow.800"
              >
                50
              </Text>
              <Text
                fontSize={{ base: "lg", lg: "2xl" }}
                fontWeight={{ lg: "semibold" }}
                color="gray.600"
              >
                países
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems={{ base: "flex-start", lg: "center" }}
              ml="2.625rem"
            >
              <Text
                fontSize={{ base: "2xl", lg: "5xl" }}
                fontWeight="semibold"
                color="yellow.800"
              >
                60
              </Text>
              <Text
                fontSize={{ base: "lg", lg: "2xl" }}
                fontWeight={{ lg: "semibold" }}
                color="gray.600"
              >
                línguas
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems={{ base: "flex-start", lg: "center" }}
              ml="2.625rem"
            >
              <Text
                fontSize={{ base: "2xl", lg: "5xl" }}
                fontWeight="semibold"
                color="yellow.800"
              >
                27
              </Text>
              <Text
                fontSize={{ base: "lg", lg: "2xl" }}
                fontWeight={{ lg: "semibold" }}
                color="gray.600"
              >
                cidades + 100
              </Text>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
