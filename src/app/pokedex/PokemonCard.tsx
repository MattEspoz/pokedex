"use client";
// src/components/PokemonCard.tsx
import { Box, Heading, Image, Text } from "@/components/Chakra";
import React from "react";

interface PokemonCardProps {
  pokemon_id: number;
  name: string;
  type: string;
}
const formatID = (pokemon_id: number) => pokemon_id.toString().padStart(3, "0");

const typeColors: { [key: string]: string } = {
  Electric: "#936216",
  Fire: "red.500",
  Grass: "green.500",
  Normal: "gray",
  Psychic: "purple.500",
  Water: "blue.500",
  Fighting: "brown",
  // Add more types as needed
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon_id,
  name,
  type,
}) => (
  <Box
    p="4" // Increase padding to make the card larger
    borderRadius="lg"
    border="2px solpokemon_id #9AA4D3"
    width="100%"
    bg="#DDEFF5"
    textAlign="left"
  >
    <Box
      display="flex"
      justifyContent="space-between"
      mb="2"
      textAlign="center"
      mt="2"
    >
      <Text fontWeight="bold" color="gray.700">
        #{formatID(pokemon_id)}
      </Text>
      <Text
        fontWeight="bold"
        color="gray.200"
        bg={typeColors[type] || "gray"} // Default to gray if type is not in the mapping
        px="2"
        borderRadius="md"
      >
        {type}
      </Text>
    </Box>

    {/* Pokemon Name */}
    <Heading as="h2" fontSize="xl" mb="2" color="gray.700">
      {name}
    </Heading>
  </Box>
);

export default PokemonCard;
