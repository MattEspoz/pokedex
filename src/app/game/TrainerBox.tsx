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
  useToast,
} from "@/components/Chakra";
import supabase from "@/config/supabaseClient";
import React, { useEffect, useState } from "react";

const TrainerBox = () => {
  const [showAttackText, setShowAttackText] = useState(false);
  const [attackPoints, setAttackPoints] = useState(0);
  const [captureCount, setCaptureCount] = useState(0);
  const [capturedPokemonId, setCapturedPokemonId] = useState<number | null>(
    null
  );
  const [capturedPokemonName, setCapturedPokemonName] = useState<string | null>(
    null
  );

  const [trainerData, setTrainerData] = useState<any>({});
  const toast = useToast();

  const handleFightClick = () => {
    console.log("hi");

    // Generate a random number between 8 and 32 for the attack points
    const newAttackPoints = Math.floor(Math.random() * (32 - 8 + 1)) + 8;
    setAttackPoints(newAttackPoints);

    // Display the attack text
    setShowAttackText(true);

    // Hide the attack text after 2 seconds
    setTimeout(() => {
      setShowAttackText(false);
    }, 2000);

    // Check for capture every 5th fight
    if ((captureCount + 1) % 5 === 0) {
      setCaptureCount(0); // Reset capture count
      capturePokemon();
    } else {
      setCaptureCount(captureCount + 1);
    }
  };

  const capturePokemon = async () => {
    // Fetch all Pokemon IDs from the "Pokemon" database
    const { data: allPokemon, error } = await supabase
      .from("Pokemon")
      .select("pokemon_id, name");

    if (error) {
      console.error("Error fetching Pokemon data:", error);
      return;
    }

    // Extract existing Pokemon IDs from the Trainer data
    const existingPokemonIds = trainerData.pokemon_ids || [];

    // Find a random Pokemon ID that is not already captured
    let newPokemonId, newPokemonName;
    do {
      const randomPokemon =
        allPokemon[Math.floor(Math.random() * allPokemon.length)];
      newPokemonId = randomPokemon.pokemon_id;
      newPokemonName = randomPokemon.name;
    } while (existingPokemonIds.includes(newPokemonId));

    // Update the Trainer data with the new captured Pokemon
    const updatedTrainerData = {
      ...trainerData,
      pokemon_ids: [...existingPokemonIds, newPokemonId],
    };
    setTrainerData(updatedTrainerData);

    // Set the captured Pokemon ID for display in the Divider
    setCapturedPokemonId(newPokemonId);
    setCapturedPokemonName(newPokemonName);

    // Update the Trainer database in Supabase
    try {
      const { error } = await supabase
        .from("Trainer")
        .update({ pokemon_ids: updatedTrainerData.pokemon_ids })
        .eq("trainer_id", trainerData.trainer_id);

      if (error) {
        console.error("Error updating Trainer data:", error);
      }
    } catch (error) {
      console.error("Error updating Trainer data:", error);
    }

    // Trigger a toast notification for capturing a new Pokemon
    toast({
      title: "New Pokemon Captured",
      description: "Congratulations! You've captured a new Pokemon.",
      status: "success",
      position: "top-right",
      duration: 5000,
      isClosable: true,
    });
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

  useEffect(() => {
    const fetchTrainerData = async () => {
      try {
        const { data, error } = await supabase
          .from("Trainer")
          .select()
          .order("trainer_id");

        if (error) {
          console.error("Error fetching Trainer data:", error);
        } else {
          console.log(data.length + "data length");
          console.log(data + "data trainer id");
          setTrainerData(data[0]);
        }
      } catch (error) {
        console.error("Error fetching Trainer data:", error);
      }
    };

    fetchTrainerData();
  }, []);

  const { trainer_id, first_name, last_name, age, pokemon_ids } = trainerData;

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
        <Image
          src="/character.png"
          alt="Trainer"
          maxH="80px"
          maxW="80px"
          mx="auto"
        />
      </Box>
      <Heading as="h2" fontSize="2xl" mb="2" mt="2">
        {first_name} {last_name} |{" "}
        {trainer_id ? trainer_id.toString().padStart(3, "0") : ""}
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
      {capturedPokemonId && (
        <Text>
          New Pokemon: {capturedPokemonName} {capturedPokemonId}
        </Text>
      )}
    </VStack>
  );
};

export default TrainerBox;
