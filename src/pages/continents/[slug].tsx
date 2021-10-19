import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";

import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";
import { Continent } from "../../models/Continent";
import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../services/api";
import { Popover100Cities } from "../../components/Popover100Cities";
import { Cities } from "../../components/Cities";

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
                <Popover100Cities />
              </Info>
            </Flex>
          </SimpleGrid>
          <Cities cities={continent.cities} />
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
