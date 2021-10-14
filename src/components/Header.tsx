import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      bg="white"
      align="center"
      justify="center"
      h={{ base: "50px", lg: "100px" }}
    >
      <Image
        src="/logo.svg"
        h={{ base: "20px", lg: "46px" }}
        alt="Logo da Worldtrip"
      />
    </Flex>
  );
}
