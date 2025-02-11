import TrackSection from "./TrackSection";

export default function TryAgain() {
  const gradientColors = [
    '#dbae99',
    '#6b5050',
    '#131316',
    '#9e4b3c',
    '#898e93',
    '#3b3135',
    '#4a4e55',
    '#2a2d35',
    '#454c4b',
    '#888494' 
  ];

  return (
    <TrackSection
      title="Try Again"
      description={`A groundbreaking fusion of R&B and electronic elements that became one of 
        Aaliyah's signature songs. The track's futuristic production and confident 
        vocals create an empowering anthem about persistence and resilience in the 
        face of challenges.`}
      imageSrc="/home/try-again.jpg"
      imageAlt="Try Again Album Cover"
      gradientColors={gradientColors}
      reversed={false}
      videoId="qTA0RuZoIxM"
      singleColumn
    />
  );
}