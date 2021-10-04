import {
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Home() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex h="100vh" direction="column">
      <Flex
        bg="white"
        align="center"
        justify="center"
        h={{ base: "50px", lg: "100px" }}
      >
        <Image src="/logo.svg" h={{ base: "20px", lg: "46px" }} />
      </Flex>
      <Flex
        h={{ base: "163px", lg: "335px" }}
        bgImage="/banner.jpg"
        bgSize="cover"
        bgPosition={{ base: "100% 20%", lg: "100% 30%" }}
        p={{ base: "1.75rem 1rem 1.75rem", lg: "5rem 8.75rem 0" }}
      >
        <Flex direction="column">
          <Heading
            fontWeight="medium"
            lineHeight={{ base: "1.875rem", lg: "3.375rem" }}
            fontSize={{ base: "1.25rem", lg: "2.25rem" }}
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text
            fontSize={{ base: "sm", lg: "xl" }}
            lineHeight={{ base: "1.3125rem", lg: "1.875rem" }}
            mt={{ base: "0.5rem", lg: "1.25rem" }}
          >
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </Flex>
        {isWideVersion && <Image src="/airplane.svg" h="293px" ml="auto" />}
      </Flex>
    </Flex>
  );
}
