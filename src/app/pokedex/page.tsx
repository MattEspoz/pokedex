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
import supabase from "@/config/supabaseClient";
import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokedex: React.FC = () => {
  const [originalPokemonData, setOriginalPokemonData] = useState<any[]>([]);
  const [pokemonData, setPokemonData] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const { data, error } = await supabase.from("Pokemon").select();
        if (error) {
          console.error("Error fetching Pokemon data:", error);
        } else {
          setPokemonData(data || []);
          setOriginalPokemonData(data || []); // Save original data
        }
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      // If the search query is empty, display all Pokemon
      setPokemonData(originalPokemonData);
    } else {
      // Filter PokemonData based on the search query
      const filteredData = originalPokemonData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setPokemonData(filteredData);
    }
  };

  return (
    <>
      <Box maxW="4xl" mx="auto" mt={20} textAlign="center" overflow="auto">
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
            bg="#FFA7A7"
            border="2px solid #FE4040"
            fontWeight="bold"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button colorScheme="teal" bg="#FE4040" onClick={handleSearch}>
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
};

export default Pokedex;
