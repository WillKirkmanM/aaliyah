import TrackSection from "./TrackSection";

export default function ReadBetweenTheLines() {
  const gradientColors = [
    '#caaa99',
    '#5cc1db',
    '#397eaa',
    '#2a5a82',
    '#273c5d',
    '#415d63',
    '#6c3e46',
    '#492832',
    '#9c4537',
    '#1f1c2c' 
  ];

  return (
    <TrackSection
      title="Read Between The Lines"
        description={`A soliloquious dialogue between Aaliyah and her inner thoughts, sure that her lover is sneakily decieving her, questions her partner's strategic ability.`}
      imageSrc="/home/read-between-the-lines.jpg"
      imageAlt="Read Between The Lines Album Cover"
      gradientColors={gradientColors}
      reversed={false}
    />
  );
}