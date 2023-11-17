"use client";
// pages/game.tsx
import { Box, Divider, Heading, Text } from "@/components/Chakra";
import { Button } from "@chakra-ui/react";
import React from "react";
import LeaderBox from "./LeaderBox";
import TrainerBox from "./TrainerBox";

const GamePage: React.FC = () => {
  const leaderData = {
    title: "Leader | 011",
    image: "/leader.png",
    subtitle: "Leader | 011",
    cards: [
      { label: "Stage", value: "XXX" },
      { label: "Battle", value: "XXX" },
      { label: "Type", value: "Fire" },
      { label: "Location", value: "Kanto" },
    ],
  };

  const trainerData = {
    title: "Trainer | 001",
    image: "/character.png",
    subtitle: "Trainer | 001",
    cards: [
      { label: "Stage", value: "XXX" },
      { label: "Battle", value: "XXX" },
      { label: "Type", value: "Water" },
      { label: "Location", value: "Johto" },
    ],
  };

  return (
    <Box maxW="4xl" mx="auto" mt={20} textAlign="center">
      {/* Header */}
      <Heading as="h1" fontSize="4xl" mb="4" textAlign="left">
        Battle Mode
      </Heading>

      {/* 2-column layout using Grid */}
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap="8">
        {/* Left column */}
        <LeaderBox {...leaderData} />

        {/* Right column */}
        <TrainerBox {...trainerData} />
      </Box>
    </Box>
  );
};

export default GamePage;
