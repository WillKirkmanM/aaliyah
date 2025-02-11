import TrackSection from "./TrackSection";

export default function ItsWhatever() {
  const gradientColors = [
    '#e2d6db',
    '#d0b099',
    '#a49c99',
    '#a68c6e',
    '#aace7e',
    '#6e6f55',
    '#595c1e',
    '#293326',
    '#6f2d33',
    '#399f86' 
  ];

  return (
    <TrackSection
      title="It's Whatever"
      description={`A laid-back groove that showcases Aaliyah's effortless cool, where she 
        dismisses drama with casual confidence. The track's smooth production and her 
        nonchalant delivery create a perfect blend of sophistication and attitude.`}
      imageSrc="/home/its-whatever.png"
      imageAlt="It's Whatever Album Cover"
      gradientColors={gradientColors}
      reversed={true}
      videoId="Vq4WNND_0zw"
      singleColumn
    />
  );
}