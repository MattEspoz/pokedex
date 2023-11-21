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
import supabase from "@/config/supabaseClient";
import React, { useEffect, useState } from "react";

const cardLabels = ["Stage", "Type", "Location"];

const LeaderBox = () => {
  const [leaderData, setLeaderData] = useState<any>({});

  useEffect(() => {
    const fetchLeaderData = async () => {
      try {
        const { data, error } = await supabase.from("Leader").select(
          `
            leader_id,
            first_name,
            last_name,
            stage_no,
            gym_id,
            Gym(type, location)
          `
        );

        if (error) {
          console.error("Error fetching Leader data:", error);
        } else if (data && data.length > 0) {
          // Randomly select a leader from the fetched data
          const randomIndex = Math.floor(Math.random() * data.length);
          setLeaderData(data[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching Leader data:", error);
      }
    };

    fetchLeaderData();
  }, []);

  const { leader_id, first_name, last_name, stage_no, gym_id } = leaderData;
  const { type, location } = leaderData.Gym || {};

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
          src="/leader.png"
          alt="Gym Leader"
          maxH="80px"
          maxW="80px"
          mx="auto"
        />
      </Box>
      <Heading as="h2" fontSize="2xl" mb="2" mt="2">
        {first_name} {last_name} |{" "}
        {leader_id ? leader_id.toString().padStart(3, "0") : ""}
      </Heading>
      <Divider mb="4" borderWidth="2px" />
      <VStack spacing="2" width="100%">
        {cardLabels.map((label) => (
          <Box
            key={label}
            bg="#D4C8C8"
            p="2"
            borderRadius="md"
            border="2px solid #828282"
            width="100%"
          >
            <Text fontWeight="bold">
              {label}: {label === "Stage" && stage_no}
              {label === "Type" && type}
              {label === "Location" && location}
            </Text>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default LeaderBox;
