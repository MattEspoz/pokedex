"use client";
// pages/game.tsx
import { Box, Divider, Heading, Text } from "@/components/Chakra";
import { Button } from "@chakra-ui/react";
import React from "react";
import LeaderBox from "./LeaderBox";
import TrainerBox from "./TrainerBox";

const GamePage: React.FC = () => {
  return (
    <Box maxW="4xl" mx="auto" mt={20} textAlign="center">
      {/* Header */}
      <Heading as="h1" fontSize="4xl" mb="4" textAlign="left">
        Battle Mode
      </Heading>

      {/* 2-column layout using Grid */}
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap="8">
        {/* Left column */}
        <LeaderBox />

        {/* Right column */}
        <TrainerBox />
      </Box>
    </Box>
  );
};

export default GamePage;
