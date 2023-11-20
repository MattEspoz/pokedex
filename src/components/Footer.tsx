"use client";
// components/Footer.tsx
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => (
  <Box p="4" textAlign="center" width="100%">
    <Text color="gray.700" fontWeight="bold">
      🔆 Built by Matt & Naz
    </Text>
  </Box>
);

export default Footer;
