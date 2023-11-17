"use client";
// src/components/PokemonCard.tsx
import { Box, Heading, Image, Text } from "@/components/Chakra";
import React from "react";

interface PokemonCardProps {
  id: number;
  name: string;
  type: string;
  imageUrl?: string;
}
const formatId = (id: number) => id.toString().padStart(3, "0");

const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  name,
  type,
  imageUrl,
}) => (
  <Box
    p="4" // Increase padding to make the card larger
    borderRadius="lg"
    border="2px solid #9AA4D3"
    width="100%"
    bg="#DDEFF5"
    textAlign="left"
  >
    {/* Green box with the Pokemon image */}
    <Box
      bg="gray.200"
      p="2"
      borderRadius="md"
      mb="4"
      textAlign="center"
      maxH="100px"
    >
      <Image src={imageUrl} alt={name} maxH="80px" maxW="80px" mx="auto" />
    </Box>

    {/* ID and Type */}
    <Box
      display="flex"
      justifyContent="space-between"
      mb="2"
      textAlign="center"
      mt="2"
    >
      <Text fontWeight="bold" color="gray.700">
        #{formatId(id)}
      </Text>
      <Text
        fontWeight="bold"
        color="gray.700"
        bg="gray.400"
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
