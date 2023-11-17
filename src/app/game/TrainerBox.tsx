"use client";
// components/TrainerBox.tsx
import {
    Box,
    Button,
    Divider,
    Heading,
    Image,
    Text,
    VStack,
} from "@/components/Chakra";
import React, { useEffect, useState } from "react";

interface TrainerBoxProps {
  title: string;
  image: string;
  subtitle: string;
  cards: { label: string; value: string }[];
}

const TrainerBox: React.FC<TrainerBoxProps> = ({
  title,
  image,
  subtitle,
  cards,
}) => {
  const [showAttackText, setShowAttackText] = useState(false);
  const attackPoints = Math.floor(Math.random() * (32 - 8 + 1)) + 8;
  const handleFightClick = () => {
    // Generate a random number between 8 and 32 for the attack points

    console.log("hi");
    // Display the attack text
    setShowAttackText(true);

    // Hide the attack text after 2 seconds
    setTimeout(() => {
      setShowAttackText(false);
    }, 2000);
  };

  useEffect(() => {
    if (showAttackText) {
      // Clear the attack text after 2 seconds
      const timerId = setTimeout(() => {
        setShowAttackText(false);
      }, 2000);

      // Clear the timer when the component unmounts or when the attack text is hidden
      return () => clearTimeout(timerId);
    }
  }, [showAttackText]);

  return (
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

      <Button
        colorScheme="teal"
        mb="4"
        width="60%"
        bg="#DDABA2"
        color="black"
        border="2px solid #AA3030"
        _hover={{ bg: "#AA3030", color: "#FFFFFF" }}
        onClick={handleFightClick}
      >
        Fight
      </Button>

      {showAttackText && (
        <Text fontSize="xl" color="red.500">
          💢 You attacked {attackPoints} points
        </Text>
      )}

      <Divider mb="4" borderWidth="2px" />
    </VStack>
  );
};

export default TrainerBox;
