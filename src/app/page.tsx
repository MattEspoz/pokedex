"use client";
// pages/_app.tsx
import Profile from "./profile/page";

function MyApp() {
  return (
    <Profile
      name="Bulbasaur"
      imageUrl="https://example.com/bulbasaur.jpg"
      description="a grass pokemon"
    />
  );
}

export default MyApp;
