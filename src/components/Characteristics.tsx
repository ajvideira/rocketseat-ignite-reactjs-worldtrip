import { Flex, Heading, Image, useBreakpointValue } from "@chakra-ui/react";

export function Characteristics() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      justify="center"
      mx="auto"
      maxW="1160px"
      minW="275px"
      flexWrap="wrap"
      css={{ columnGap: "2rem", rowGap: "1.6875rem" }}
      px="50px"
      mt={{ base: "2.25rem", lg: "7.125rem" }}
    >
      <Flex
        direction={isWideVersion ? "column" : "row"}
        alignItems="center"
        justify="center"
        flex="1"
        minWidth="158px"
      >
        {isWideVersion && (
          <Image src="/images/cocktail.svg" h="85px" alt="Imagem de um drink" />
        )}
        {!isWideVersion && (
          <Image
            src="/images/ellipse.svg"
            h="8px"
            mr="0.5rem"
            alt="Marcador de item da lista"
          />
        )}
        <Heading
          fontSize={{ base: "1.125rem", lg: "1.5rem" }}
          mt={isWideVersion ? "1.5rem" : 0}
          fontWeight="semibold"
        >
          vida noturna
        </Heading>
      </Flex>
      <Flex
        direction={isWideVersion ? "column" : "row"}
        align="center"
        justify="center"
        flex="1"
        minWidth="85px"
      >
        {isWideVersion && (
          <Image src="/images/surf.svg" h="85px" alt="Imagem de uma praia" />
        )}
        {!isWideVersion && (
          <Image
            src="/images/ellipse.svg"
            h="8px"
            mr="0.5rem"
            alt="Marcador de item da lista"
          />
        )}
        <Heading
          fontSize={{ base: "1.125rem", lg: "1.5rem" }}
          mt={isWideVersion ? "1.5rem" : 0}
          fontWeight="semibold"
        >
          praia
        </Heading>
      </Flex>
      <Flex
        direction={isWideVersion ? "column" : "row"}
        align="center"
        justify="center"
        flex="1"
        minWidth="113px"
      >
        {isWideVersion && (
          <Image src="/images/tower.svg" h="85px" alt="Imagem de um prédio" />
        )}
        {!isWideVersion && (
          <Image
            src="/images/ellipse.svg"
            h="8px"
            mr="0.5rem"
            alt="Marcador de item da lista"
          />
        )}
        <Heading
          fontSize={{ base: "1.125rem", lg: "1.5rem" }}
          mt={isWideVersion ? "1.5rem" : 0}
          fontWeight="semibold"
        >
          moderno
        </Heading>
      </Flex>
      <Flex
        direction={isWideVersion ? "column" : "row"}
        align="center"
        justify="center"
        flex="1"
        minWidth="100px"
      >
        {isWideVersion && (
          <Image src="/images/museum.svg" h="85px" alt="Imagem de um museu" />
        )}
        {!isWideVersion && (
          <Image
            src="/images/ellipse.svg"
            h="8px"
            mr="0.5rem"
            alt="Marcador de item da lista"
          />
        )}
        <Heading
          fontSize={{ base: "1.125rem", lg: "1.5rem" }}
          mt={isWideVersion ? "1.5rem" : 0}
          fontWeight="semibold"
        >
          clássico
        </Heading>
      </Flex>
      <Flex
        direction={isWideVersion ? "column" : "row"}
        align="center"
        justify="center"
        flex="1"
        minWidth="101px"
      >
        {isWideVersion && (
          <Image
            src="/images/earth.svg"
            h="85px"
            alt="Imagem do planeta Terra"
          />
        )}
        {!isWideVersion && (
          <Image
            src="/images/ellipse.svg"
            h="8px"
            mr="0.5rem"
            alt="Marcador de item da lista"
          />
        )}
        <Heading
          fontSize={{ base: "1.125rem", lg: "1.5rem" }}
          mt={isWideVersion ? "1.5rem" : 0}
          fontWeight="semibold"
        >
          e mais...
        </Heading>
      </Flex>
    </Flex>
  );
}
