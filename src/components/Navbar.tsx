// components/Navbar.tsx
import { Box, Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

const Navbar = () => (
  <Box
    bg="#EB9292"
    color="white"
    p="4"
    width="100%"
    zIndex="1000"
    borderBottom="4px solid #B82E2E" // Add bottom border
  >
    <Container maxW="4xl">
      <Flex justify="space-between" align="center">
        {/* Pokédex Button */}
        <NextLink href="/pokedex" passHref>
          <Link>
            <Button
              bg="#030201"
              color="#FFFFFF"
              variant="outline"
              borderColor="#FFFFFF"
              _hover={{ bg: "#1a1a1a" }}
              border="2px solid #FFFFFF"
            >
              <Image
                src="/pokedex.png"
                alt="Play Game"
                width={24}
                height={24}
              />
              <Text ml="2">Pokedex</Text>
            </Button>
          </Link>
        </NextLink>

        {/* Empty Box for spacing */}
        <Box flex="1" />
        <Flex align="center" gap="4">
          {/* Play Game Button */}
          <Button
            bg="#030201"
            color="#FFFFFF"
            variant="outline"
            borderColor="#FFFFFF"
            _hover={{ bg: "#1a1a1a" }}
            border="2px solid #FFFFFF"
          >
            <Image src="/pokeball.png" alt="Play Game" width={24} height={24} />
            <Text ml="2">Play Game</Text>
          </Button>

          {/* Profile Button */}
          <NextLink href="/profile" passHref>
            <Link>
              <Button
                bg="#A2DAF2"
                color="#FFFFFF"
                variant="outline"
                borderColor="#274288"
                _hover={{ bg: "#1a1a1a" }}
                border="2px solid #274288"
              >
                <Image
                  src="/character.png"
                  alt="Play Game"
                  width={24}
                  height={24}
                />
                <Text ml="2" color="black">
                  Profile
                </Text>
              </Button>
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Container>
  </Box>
);

export default Navbar;
