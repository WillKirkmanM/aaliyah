import TrackSection from "./TrackSection";

export default function WhatIf() {
  const gradientColors = [
    '#ca9b7e',
    '#8f8484',
    '#948c88',
    '#7c442f',
    '#9c4c3f',
    '#532d23',
    '#3c464e',
    '#46505c',
    '#575c58',
    '#1d1c1d' 
  ];

  return (
    <TrackSection
      title="What If"
      description={`A thought-provoking exploration of possibilities and consequences, where 
        Aaliyah's haunting vocals weave through intricate production. The track 
        presents a series of questions that showcase her ability to blend 
        vulnerability with strength.`}
      imageSrc="/home/what-if.jpg"
      imageAlt="What If Album Cover"
      gradientColors={gradientColors}
      reversed={true}
    />
  );
}