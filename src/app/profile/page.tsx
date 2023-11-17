"use client";
// profile/page.tsx
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@/components/Chakra";
import Navbar from "@/components/Navbar";

interface ProfileProps {
  name: string;
  imageUrl: string;
  description: string;
}

const Profile: React.FC<ProfileProps> = ({ name, imageUrl, description }) => (
  <>
    <VStack spacing="6" maxW="2xl" mx="auto">
      <Heading size="xl" textAlign="left">
        My Profile
      </Heading>
      <Text as="span" color="gray.600" fontWeight="bold">
        View the Pokemon I've Collected
      </Text>
      <Divider borderColor="#FF7171" borderWidth="2px" mb="4" />
      {/* Two-column layout using Flex */}
      <Flex
        align="start"
        justify="center"
        direction={{ base: "column", md: "row" }}
        gap="8"
      >
        {/* Left Column */}
        <VStack align="start" spacing="4">
          {/* Pokemon Card */}
          <Box
            bg="linear-gradient(40deg, #AA3030 0%, #AA3030 100%)"
            p="4"
            borderRadius="md"
            border="2px solid #AA3030"
            width={{ base: "100%", md: "300px" }}
          >
            {/* Add your Pokemon card content here */}
            {/* For example: */}
            <Heading as="h2" fontSize="lg" mb="2" color="white">
              Pokemon Details
            </Heading>
            <Image src={imageUrl} alt={name} maxH="200px" mb="2" />
            <Text color="white">{description}</Text>
          </Box>
        </VStack>

        {/* Right Column */}
        <VStack align="start" spacing="4">
          {/* Title for Pokemon Collected */}
          <Heading as="h2" fontSize="lg" mb="2">
            Pokemon Collected
          </Heading>
          {/* Map and display the collected Pokemon */}
          {/* For example: */}
          <Text>Bulbasaur</Text>
          <Text>Charmander</Text>
          {/* Add more Pokemon names as needed */}
        </VStack>
      </Flex>
    </VStack>
  </>
);

export default Profile;
