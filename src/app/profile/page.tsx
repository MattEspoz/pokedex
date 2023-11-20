"use client";
// profile/page.tsx
import { Box, Divider, Flex, Heading, Image, Text } from "@/components/Chakra";
import supabase from "@/config/supabaseClient";
import { useEffect, useState } from "react";

const Profile = () => {
  // console.log(supabase);

  const [pokemon, setPokemon] = useState<null | any[]>(null);
  const [pokemonDetails, setPokemonDetails] = useState<null | any[]>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const { data, error } = await supabase.from("Trainer").select();
      if (error) console.log(error);

      if (data) {
        setPokemon(data);
      }
    };

    fetchPokemon();
  }, []);

  const fetchAllPokemonIds = async () => {
    const { data, error } = await supabase.from("Pokemon").select("pokemon_id");

    if (error) {
      console.error(error);
      return [];
    }

    if (data) {
      return data.map((pokemon) => pokemon.pokemon_id);
    }

    return [];
  };

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const allPokemonIds = await fetchAllPokemonIds();

      if (allPokemonIds.length > 0) {
        const { data, error } = await supabase
          .from("Pokemon")
          .select()
          .in("pokemon_id", allPokemonIds);

        if (error) console.error(error);

        if (data) {
          setPokemonDetails(data);
        }
      }
    };

    fetchPokemonDetails();
  }, []);

  return (
    <>
      <Box maxW="4xl" mx="auto" mt={10} textAlign="left">
        <Heading size="xl" mb="2" ml={4}>
          📀 My Profile
        </Heading>
        {pokemon && (
          <Text as="span" color="gray.600" fontWeight="bold" ml={4}>
            View the Pokemon you have collected
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
            <Heading color="#544E4E" fontSize="4xl" mt="4">
              Pokemon Collected
            </Heading>
            {pokemon && (
              <Text as="span" color="gray.600" fontWeight="bold">
                You have captured{" "}
                <Box as="span" color="#AA3030" textDecoration="underline">
                  {pokemon[0]?.pokemon_ids.length}
                </Box>{" "}
                Pokemon.
              </Text>
            )}
            {/* TODO: Map and display the collected Pokemon */}
            {/* Map and display the collected Pokemon */}
            <Flex flexWrap="wrap">
              {pokemon &&
                pokemonDetails &&
                pokemon[0]?.pokemon_ids.map((id: number, index: number) => (
                  <Box
                    key={id}
                    bg="#DDEFF5"
                    p="4"
                    borderRadius="md"
                    border="2px solid #9AA4D3"
                    mt="4"
                    mr="4"
                  >
                    {/* Display Pokemon data here */}
                    <Text color="black" fontWeight="bold" textAlign="center">
                      {pokemonDetails[index]?.name || `Pokemon #${id}`}
                    </Text>
                    {/* Additional Pokemon data can be added as needed */}
                  </Box>
                ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Profile;
