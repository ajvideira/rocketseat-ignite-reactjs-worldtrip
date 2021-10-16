import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function ContinentBanner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });

  return (
    <Flex
      h={{ base: "163px", lg: "500px" }}
      bgImage="/images/continents/europe2.jpg"
      bgSize="cover"
      bgPosition={{ base: "100% 20%", lg: "100% 30%" }}
      p={{ base: "0", lg: "23rem 0 0 8.75rem" }}
      w="100%"
      justify={isWideVersion ? "flex-start" : "center"}
      alignItems={isWideVersion ? "flex-start" : "center"}
    >
      <Heading
        fontWeight="semibold"
        lineHeight={{ base: "1.875rem", lg: "3rem" }}
        fontSize={{ base: "1.25rem", lg: "5xl" }}
        color="gray.50"
      >
        Europa
      </Heading>
    </Flex>
  );
}
