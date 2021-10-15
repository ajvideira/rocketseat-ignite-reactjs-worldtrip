import { Box, Flex, Heading } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

export function Carousel() {
  return (
    <Flex
      maxW="1240px"
      width="100%"
      h={{ base: "250px", lg: "450px" }}
      margin={{ base: "1.25rem auto 0", lg: "3.25rem auto 0" }}
    >
      <Swiper
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
        loop
        autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
      >
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Flex
            justify="center"
            alignItems="center"
            h="100%"
            w="100%"
            bgImage="/images/continents/europe2.jpg"
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
                Europa
              </Heading>
              <Heading
                mt={{ base: "0.75rem", lg: "1rem" }}
                fontWeight="bold"
                fontSize={{ base: "sm", lg: "2xl" }}
                color="gray.100"
              >
                O continente mais antigo
              </Heading>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Flex
            justify="center"
            alignItems="center"
            h="100%"
            w="100%"
            bgImage="/images/continents/america2.jpg"
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
                América
              </Heading>
              <Heading
                mt={{ base: "0.75rem", lg: "1rem" }}
                fontWeight="bold"
                fontSize={{ base: "sm", lg: "2xl" }}
                color="gray.100"
              >
                O novo mundo ocidental
              </Heading>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Flex
            justify="center"
            alignItems="center"
            h="100%"
            w="100%"
            bgImage="/images/continents/africa2.jpg"
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
                África
              </Heading>
              <Heading
                mt={{ base: "0.75rem", lg: "1rem" }}
                fontWeight="bold"
                fontSize={{ base: "sm", lg: "2xl" }}
                color="gray.100"
              >
                A vida natural em seu estado puro
              </Heading>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Flex
            justify="center"
            alignItems="center"
            h="100%"
            w="100%"
            bgImage="/images/continents/asia2.jpg"
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
                Ásia
              </Heading>
              <Heading
                mt={{ base: "0.75rem", lg: "1rem" }}
                fontWeight="bold"
                fontSize={{ base: "sm", lg: "2xl" }}
                color="gray.100"
              >
                A terra do sol nascente
              </Heading>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Flex
            justify="center"
            alignItems="center"
            h="100%"
            w="100%"
            bgImage="/images/continents/oceania2.jpg"
            bgSize="cover"
            bgPosition={{ base: "100% 20%", lg: "100% 30%" }}
            direction="column"
          >
            <Flex
              h="100%"
              w="100%"
              bg="rgba(0, 0, 0, 0.1)"
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Heading
                fontWeight="bold"
                fontSize={{ base: "2xl", lg: "5xl" }}
                color="gray.50"
              >
                Oceania
              </Heading>
              <Heading
                mt={{ base: "0.75rem", lg: "1rem" }}
                fontWeight="bold"
                fontSize={{ base: "sm", lg: "2xl" }}
                color="gray.100"
              >
                A terra das coisas gigantes
              </Heading>
            </Flex>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
