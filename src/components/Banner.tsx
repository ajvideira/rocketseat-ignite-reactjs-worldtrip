import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });

  return (
    <Flex
      h={{ base: "163px", lg: "335px" }}
      bgImage="/banner.jpg"
      bgSize="cover"
      bgPosition={{ base: "100% 20%", lg: "100% 30%" }}
      p={{ base: "1.75rem 1rem 1.75rem", lg: "5rem 8.75rem 0" }}
      w="100%"
    >
      <Flex direction="column">
        <Heading
          fontWeight="medium"
          lineHeight={{ base: "1.875rem", lg: "3.375rem" }}
          fontSize={{ base: "1.25rem", lg: "2.25rem" }}
          color="gray.50"
        >
          5 Continentes, <br />
          infinitas possibilidades.
        </Heading>
        <Text
          fontSize={{ base: "sm", lg: "xl" }}
          lineHeight={{ base: "1.3125rem", lg: "1.875rem" }}
          mt={{ base: "0.5rem", lg: "1.25rem" }}
          color="gray.100"
          maxW={{ base: "333px", lg: "524px" }}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
      {isWideVersion && (
        <Image
          src="/airplane.svg"
          h={{ md: "160px", lg: "293px" }}
          ml="auto"
          alt="Imagem de um avião"
        />
      )}
    </Flex>
  );
}
