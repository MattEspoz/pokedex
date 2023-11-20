"use client";
// profile/page.tsx
import { Box, Divider, Flex, Heading, Image, Text } from "@/components/Chakra";
import supabase from "@/config/supabaseClient";
import { useEffect, useState } from "react";

const Profile = () => {
  // console.log(supabase);

  const [pokemon, setPokemon] = useState<null | any[]>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const { data, error } = await supabase.from("Gym").select();
      if (error) console.log(error);
      console.log(data);

      if (data) {
        setPokemon(data);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <Box maxW="4xl" mx="auto" mt={10} textAlign="left">
        <Heading size="xl" mb="2" ml={4}>
          📀 My Profile
        </Heading>
        {pokemon && (
          <Text as="span" color="gray.600" fontWeight="bold" ml={4}>
            You have collected {pokemon.length} Pokemon.
          </Text>
        )}
        <Divider borderColor="#FF7171" borderWidth="2px" mb="4" mt={4} ml={4} />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="start"
          gap={{ base: "4", md: "8" }}
          ml={4}
        >
          {/* Left Column */}
          <Box
            bg="#DDA2A2"
            p="8"
            borderRadius="md"
            border="2px solid #AA3030"
            width={{ base: "100%", md: "25%" }}
          >
            <Image src="trainer.png" alt="trainer" maxH="85%" mb="2" />
            <Text color="black" fontWeight="bold" textAlign="center">
              {" "}
              Trainer | 001
            </Text>
          </Box>

          {/* Right Column */}
          <Box width={{ base: "100%", md: "75%" }}>
            {/* Title for Pokemon Collected */}
            <Heading color="#544E4E" fontSize="4xl" mb="2" mt="4">
              Pokemon Collected
            </Heading>
            {/* TODO: Map and display the collected Pokemon */}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Profile;
