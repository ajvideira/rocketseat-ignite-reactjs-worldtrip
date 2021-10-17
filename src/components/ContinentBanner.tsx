import { Flex, Heading } from "@chakra-ui/react";

import { Continent } from "../models/Continent";

type ContinentBannerProps = {
  continent: Continent;
};

export function ContinentBanner({ continent }: ContinentBannerProps) {
  return (
    <Flex
      h={["163px", "163px", "500px"]}
      w="100%"
      bgImage={`/images/continents/${continent.image}`}
      bgSize="cover"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      pt={{ lg: 96 }}
      pl={{ lg: 36 }}
      justify={["center", "center", "flex-start"]}
      alignItems={["center", "center", "flex-start"]}
    >
      <Heading
        fontWeight="semibold"
        fontSize={["xl", "xl", "5xl"]}
        color="gray.50"
      >
        {continent.name}
      </Heading>
    </Flex>
  );
}
