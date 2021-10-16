import { Flex, Image, Icon, useBreakpointValue } from "@chakra-ui/react";

import { RiArrowLeftSLine } from "react-icons/ri";

import Link from "next/link";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });

  return (
    <Flex
      bg="white"
      align="center"
      justify="center"
      h={{ base: "50px", lg: "100px" }}
      position="relative"
    >
      {showBackButton && (
        <Link href="/">
          <a
            title="Voltar para a Home"
            style={{
              position: "absolute",
              left: isWideVersion ? "9.5rem" : "1.375rem",
            }}
          >
            <Icon
              as={RiArrowLeftSLine}
              fontSize={{ base: 16, lg: 32 }}
              color="gray.600"
            />
          </a>
        </Link>
      )}
      <Image
        src="/images/logo.svg"
        h={{ base: "20px", lg: "46px" }}
        alt="Logo da Worldtrip"
      />
    </Flex>
  );
}
