import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import Head from "next/head";

import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";
import { Continent } from "../../models/Continent";
import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../services/api";

type ContinentPageProps = {
  continent: Continent;
};

export default function ContinentPage({ continent }: ContinentPageProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | Worldtrip</title>
      </Head>
      <Flex direction="column" mb={[6, 6, 10]}>
        <Header showBackButton />
        <ContinentBanner continent={continent} />
        <Flex
          width="100%"
          maxW="1160px"
          mt={[6, 6, 20]}
          mx="auto"
          px="4"
          direction="column"
        >
          <SimpleGrid
            flex="1"
            columnGap="20"
            rowGap="4"
            minChildWidth={["300px", "300px", "490px"]}
          >
            <Text
              width="100%"
              maxW="600px"
              fontSize={["sm", "sm", "2xl"]}
              lineHeight={[5, 5, 9]}
              align="justify"
            >
              {continent.description}
            </Text>
            <Flex justify="space-between" alignItems="center">
              <Info title="países" value={continent.countries} />
              <Info title="línguas" value={continent.languages} />
              <Info title="cidades +100" value={continent.cities.length}>
                <Popover id="cities">
                  <PopoverTrigger>
                    <span title="Abrir informações sobre as cidades +100">
                      <Icon
                        cursor="pointer"
                        as={RiInformationLine}
                        ml="1"
                        color="gray.400"
                        fontSize={[10, 10, 16]}
                      />
                    </span>
                  </PopoverTrigger>
                  <PopoverContent borderColor="yellow.800">
                    <PopoverArrow />
                    <PopoverCloseButton color="yellow.800" />
                    <PopoverBody py="5" fontSize="sm" fontWeight="normal">
                      Cidades +100 é uma reportagem do site{" "}
                      <strong>Visual Capitalism</strong>, que mostra as 100
                      cidades mais visitadas entre 2013 e 2018. Para acessar a
                      matéria,{" "}
                      <strong>
                        <a
                          href="https://www.visualcapitalist.com/the-100-most-popular-city-destinations"
                          target="_blank"
                          rel="noreferrer"
                          title="Acessar matéria dos 100 destinos mais procurados."
                        >
                          clique aqui.
                        </a>
                      </strong>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Info>
            </Flex>
          </SimpleGrid>
          <Heading mt="20" fontSize="4xl" fontWeight="medium" lineHeight="tall">
            Cidades +100
          </Heading>
          <SimpleGrid
            mt="10"
            columns={[1, null, 4]}
            minChildWidth="256px"
            spacing="30px"
            mx={["auto", "auto", 0]}
          >
            {continent.cities.map((city) => (
              <Box borderRadius="4px" w="256px" overflow="hidden" key={city.id}>
                <Image
                  src={`${city.image}`}
                  alt={`${city.name}, ${city.country}`}
                  h="173px"
                  w="100%"
                  fit="cover"
                />
                <Flex
                  justify="space-between"
                  alignItems="center"
                  p="4"
                  border="1px"
                  borderColor="yellow.300"
                  borderTop="0"
                  borderBottomRadius="4px"
                >
                  <Box>
                    <Heading fontSize="xl" fontWeight="semibold">
                      {city.name}{" "}
                      <Text as="span" fontSize="xs">
                        {city.id}º
                      </Text>
                    </Heading>
                    <Text
                      fontSize="md"
                      mt="3"
                      color="gray.700"
                      isTruncated
                      maxW="180px"
                    >
                      {city.country}
                    </Text>
                  </Box>

                  <Image
                    src={`https://flagcdn.com/${city.countryCode}.svg`}
                    alt="sdadsa"
                    h="30px"
                    w="30px"
                    fit="cover"
                    borderRadius="100%"
                  />
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: continents } = await api.get<Continent[]>("/continents");

  return {
    fallback: "blocking",
    paths: continents.map((continent) => ({
      params: {
        slug: continent.slug,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps<ContinentPageProps> = async ({
  params,
}) => {
  const { slug } = params;

  const { data: continents } = await api.get<Continent[]>("/continents", {
    params: { slug, _embed: "cities" },
  });

  if (continents.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      continent: continents[0],
    },
    revalidate: 1 * 60 * 60 * 24, //1 day
  };
};
