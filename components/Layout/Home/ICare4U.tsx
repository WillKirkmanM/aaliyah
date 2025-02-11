import TrackSection from "./TrackSection";

export default function ICare4U() {
  const gradientColors = [
    "#c3b1b1",
    "#72afca",
    "#7a534e",
    "#6186a6",
    "#573733",
    "#496d84",
    "#43556c",
    "#31484b",
    "#b33b38",
    "#262323",
  ];

  return (
    <TrackSection
      title="I Care 4 U"
      description={`"I Care 4 U" is a tender ballad where Aaliyah offers comfort and support to someone who's hurting. "I Love all the songs on the album, but my favourite right now is I Care 4 U, it's timeless. I like what the song is saying; being the strong person in the relationship, saying, 'If you're upset, let me wipe your tears, let me prove to you that I can love you.' It's different."`}
      imageSrc="/home/i-care-4-u.jpg"
      imageAlt="I Care 4 U Album Cover"
      gradientColors={gradientColors}
      reversed={false}
    />
  );
}
