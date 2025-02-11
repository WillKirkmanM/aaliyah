"use client"

import TrackSection from "./TrackSection";

export default function MoreThanAWoman() {
  const gradientColors = [
    '#cfbeb5',
    '#9aa187',
    '#884536',
    '#b5462d',
    '#5a2622',
    '#391a16',
    '#91838c',
    '#57434c' 
  ];

  return (
    <TrackSection
      title="More Than a Woman"
      description={`"More Than A Woman is about self-empowerment and breaking through limitations. 
        It's about showing that women can be strong, vulnerable, 
        sensual, and powerful all at once. The futuristic production perfectly matches 
        the forward-thinking message of embracing all aspects of womanhood."
        
        - Aaliyah`}
      imageSrc="/home/more-than-a-woman.jpg"
      imageAlt="More Than a Woman Album Cover"
      gradientColors={gradientColors}
      reversed={false}
      videoId="xgYUj_pAD-w"
      singleColumn
    />
  );
}