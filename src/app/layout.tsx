import { Box, Container, Flex } from "@/components/Chakra";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import { Providers } from "./providers";
export const metadata = {
  title: "Pokedex",
  description: "A project for COSC 4606: Database Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box height="100vh" overflow="hidden" position="relative">
            <Flex h="full" id="app-container">
              <Box
                bg="#F4FCF2"
                flex="1"
                overflowY="auto" // Add this line for vertical scrolling
                maxHeight="100vh" // Set a maximum height to enable scrolling if content overflows
              >
                <Navbar />
                <Container maxW="full">{children}</Container>
                <Footer />
              </Box>
            </Flex>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
