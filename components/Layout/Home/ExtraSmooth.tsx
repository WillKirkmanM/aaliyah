import TrackSection from "./TrackSection";

export default function ExtraSmooth() {
  const gradientColors = [
    '#bfc3de',
    '#8fa9cb',
    '#8198c5',
    '#7b8cb1',
    '#6380a9',
    '#58689d',
    '#435a8a',
    '#2c3065',
    '#59548a',
    '#070d27' 
  ];

  return (
    <TrackSection
      title="Extra Smooth"
      description={`A sultry, rhythmic track that showcases Aaliyah's signature smooth vocals over 
        hypnotic production. The song demonstrates her ability to blend R&B with 
        futuristic sounds, creating an otherworldly atmosphere that became her trademark.`}
      imageSrc="/home/extra-smooth.jpg"
      imageAlt="Extra Smooth Album Cover"
      gradientColors={gradientColors}
      reversed={true}
    />
  );
}