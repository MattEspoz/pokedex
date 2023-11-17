"use client";
// components/LeaderBox.tsx
import {
  Box,
  Divider,
  Heading,
  Image,
  Text,
  VStack,
} from "@/components/Chakra";
import React from "react";

interface LeaderBoxProps {
  title: string;
  image: string;
  subtitle: string;
  cards: { label: string; value: string }[];
}

const LeaderBox: React.FC<LeaderBoxProps> = ({
  title,
  image,
  subtitle,
  cards,
}) => (
  <VStack align="center" mb="4">
    <Box
      bg="green.100"
      p="8" // Increased padding for a larger box
      borderRadius="lg"
      border="2px solid #50AA30"
      textAlign="center"
      width="100%"
    >
      <Image src={image} alt={title} maxH="80px" maxW="80px" mx="auto" />
    </Box>
    <Heading as="h2" fontSize="2xl" mb="2" mt="2">
      {subtitle}
    </Heading>
    <Divider mb="4" borderWidth="2px" />
    <VStack spacing="2" width="100%">
      {cards.map((card) => (
        <Box
          key={card.label}
          bg="#D4C8C8"
          p="2"
          borderRadius="md"
          border="2px solid #828282"
          width="100%"
        >
          <Text fontWeight="bold">
            {card.label}: {card.value}
          </Text>
        </Box>
      ))}
    </VStack>
  </VStack>
);

export default LeaderBox;
