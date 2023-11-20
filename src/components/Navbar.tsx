"use client";
// components/Navbar.tsx
import {
  Box,
  Button,
  Link as ChakraLink,
  Container,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => (
  <Box
    bg="#EB9292"
    color="white"
    p="4"
    maxW="100%"
    zIndex="1000"
    borderBottom="4px solid #B82E2E" // Add bottom border
  >
    <Container maxW="4xl">
      <Flex justify="space-between" align="center">
        {/* Pokédex Button */}
        <Link href="/pokedex">
          <ChakraLink>
            <Button
              bg="#030201"
              color="#FFFFFF"
              variant="outline"
              borderColor="#FFFFFF"
              _hover={{ bg: "#1a1a1a" }}
              border="2px solid #FFFFFF"
            >
              <Image src="/pokedex.png" alt="Pokedex" maxW="20px" maxH="20px" />
              <Text ml="2">Pokedex</Text>
            </Button>
          </ChakraLink>
        </Link>

        {/* Empty Box for spacing */}
        <Box flex="1" />
        <Flex align="center" gap="4">
          {/* Play Game Button */}
          <Link href="/game">
            <ChakraLink>
              <Button
                bg="#030201"
                color="#FFFFFF"
                variant="outline"
                borderColor="#FFFFFF"
                _hover={{ bg: "#1a1a1a" }}
                border="2px solid #FFFFFF"
              >
                <Image
                  src="/pokeball.png"
                  alt="Play Game"
                  maxW="20px"
                  maxH="20px"
                />
                <Text ml="2">Play Game</Text>
              </Button>
            </ChakraLink>
          </Link>

          {/* Profile Button */}
          <Link href="/profile">
            <ChakraLink>
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
                  alt="Profile"
                  maxW="20px"
                  maxH="20px"
                />
                <Text ml="2" color="black">
                  Profile
                </Text>
              </Button>
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>
    </Container>
  </Box>
);

export default Navbar;
