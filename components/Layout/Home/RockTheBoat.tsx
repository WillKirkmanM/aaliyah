"use client"

import TrackSection from "./TrackSection";

export default function RockTheBoat() {
  const gradientColors = [
    '#fbfbd1',
    '#f4eb9d',
    '#cfb769',
    '#bb9d60',
    '#92865e',
    '#545c4a',
    '#150f05' 
  ];

  return (
    <TrackSection
      title="Rock The Boat"
      description={`"Rock the Boat" is a Caribbean-infused R&B anthem featuring sensual 
        nautical metaphors and an iconic tropical-themed music video. The song's 
        hypnotic production and Aaliyah's ethereal vocals create a timeless summer classic 
        that showcases her artistic evolution.`}
      imageSrc="/home/rock-the-boat.jpg"
      imageAlt="Rock The Boat Album Cover"
      gradientColors={gradientColors}
      reversed={true}
      videoId="3HSJU5fDg0A"
      singleColumn
    />
  );
}