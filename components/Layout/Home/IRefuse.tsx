import TrackSection from "./TrackSection";

export default function IRefuse() {
  const gradientColors = [
    '#cdcdcd',
    '#b4b4b4',
    '#acacac',
    '#989898',
    '#8c8c8c',
    '#6b6b6b',
    '#3c3c3c',
    '#343434',
    '#101010',
    '#000000' 
  ];

  return (
    <TrackSection
      title="I Refuse"
      description={`A powerful declaration of self-worth and boundaries, where Aaliyah 
        firmly stands her ground against manipulation. The track's orchestral
        influence perfectly complements her resolute vocals, creating a definite statement of independence.`}
      imageSrc="/home/i-refuse.jpg"
      imageAlt="I Refuse Album Cover"
      gradientColors={gradientColors}
      reversed={false}
      videoId="nlq6icy7o5g"
      singleColumn
    />
  );
}