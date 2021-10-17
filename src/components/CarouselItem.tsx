import { Flex, Heading } from "@chakra-ui/react";

import { SwiperSlide } from "swiper/react";
import { Continent } from "../models/Continent";

const continents = [];
type CarouselItemProps = {
  continent: Continent;
};

export function CarouselItem({ continent }: CarouselItemProps) {
  return (
    <SwiperSlide style={{ width: "100%", height: "100%" }}>
      <Flex
        justify="center"
        alignItems="center"
        h="100%"
        w="100%"
        bgImage={`/images/continents/${continent.image}`}
        bgSize="cover"
        bgPosition={{ base: "100% 20%", lg: "100% 30%" }}
        direction="column"
      >
        <Flex
          h="100%"
          w="100%"
          bg="rgba(0, 0, 0, 0.4)"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Heading
            fontWeight="bold"
            fontSize={{ base: "2xl", lg: "5xl" }}
            color="gray.50"
          >
            {continent.name}
          </Heading>
          <Heading
            mt={{ base: "0.75rem", lg: "1rem" }}
            fontWeight="bold"
            fontSize={{ base: "sm", lg: "2xl" }}
            color="gray.100"
          >
            {continent.title}
          </Heading>
        </Flex>
      </Flex>
    </SwiperSlide>
  );
}
