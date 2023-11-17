"use client";
// src/app/pokedex/page.tsx
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@/components/Chakra";
import React from "react";
import PokemonCard from "./PokemonCard";

// Sample data for Bulbasaur and Pikachu
const pokemonData = [
  { id: 1, name: "Bulbasaur", type: "Grass", imageUrl: "bulbasaur.png" },
  { id: 25, name: "Pikachu", type: "Electric", imageUrl: "pikachu.png" },
  // Add more Pokemon data as needed
];

const Pokedex: React.FC = () => (
  <>
    <Box maxW="4xl" mx="auto" mt={20} textAlign="center">
      <Heading size="3xl" mb="2">
        Pokédex
      </Heading>
      <Text as="span" color="gray.600" fontWeight="bold" mb="8">
        Search for a Pokemon in the database
      </Text>

      {/* Search Box and Go Button */}
      <Flex align="center" justify="center" mb="8" mt="8">
        <Input
          type="text"
          placeholder="🔎 Enter Pokemon Name"
          mr="2"
          bg="#FFA7A7" // Set background color
          border="2px solid #FE4040" // Set border color
          fontWeight="bold"
        />
        <Button
          colorScheme="teal"
          bg="#FE4040" // Set background color
        >
          GO
        </Button>
      </Flex>

      {/* Divider */}
      <Divider borderColor="#FF7171" borderWidth="2px" mb="4" mt={4} />

      {/* Pokemon Map */}
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
        {pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </SimpleGrid>
    </Box>
  </>
);

export default Pokedex;
