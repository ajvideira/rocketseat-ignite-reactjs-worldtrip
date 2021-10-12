import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });

  return (
    <Flex direction="column" mb="2.5rem">
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
            <Image src="/cocktail.svg" h="85px" alt="Imagem de um drink" />
          )}
          {!isWideVersion && (
            <Image
              src="/ellipse.svg"
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
            <Image src="/surf.svg" h="85px" alt="Imagem de uma praia" />
          )}
          {!isWideVersion && (
            <Image
              src="/ellipse.svg"
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
            <Image src="/tower.svg" h="85px" alt="Imagem de um prédio" />
          )}
          {!isWideVersion && (
            <Image
              src="/ellipse.svg"
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
            <Image src="/museum.svg" h="85px" alt="Imagem de um museu" />
          )}
          {!isWideVersion && (
            <Image
              src="/ellipse.svg"
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
            <Image src="/earth.svg" h="85px" alt="Imagem do planeta Terra" />
          )}
          {!isWideVersion && (
            <Image
              src="/ellipse.svg"
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
