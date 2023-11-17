// components/Navbar.tsx
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => (
  <Box bg="#333" color="white" p="4" width="100%" zIndex="1000">
    <Flex justify="space-between" align="center">
      <Text fontSize="xl" fontWeight="bold">
        Pokedex
      </Text>
      <Flex align="center" gap="4">
        <NextLink href="/" passHref>
          <Link>
            <Text>Home</Text>
          </Link>
        </NextLink>
        {/* Add more navigation links as needed */}
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;
