"use client"

import TrackSection from "./TrackSection";

export default function WeNeedAResolution() {
  const gradientColors = [
    '#949a9c',
    '#6ac5f2',
    '#337bcb',
    '#1c2d4e',
    '#db8a54',
    '#8a4d28',
    '#07090b' 
  ];

  return (
    <TrackSection
      title="We Need a Resolution"
      description={`"Not all the time do you actually come to a resolution," Aaliyah said. 
        "At the end of the song, they don't really resolve anything. And that happens 
        in life. So that's really what that song is about."`}
      imageSrc="/home/we-need-a-resolution.jpg"
      imageAlt="We Need a Resolution Album Cover"
      gradientColors={gradientColors}
      reversed={false}
      videoId="78YDlgZfPus"
      singleColumn
    />
  );
}