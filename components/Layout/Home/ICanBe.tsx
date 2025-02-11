import TrackSection from "./TrackSection";

export default function ICanBe() {
  const gradientColors = [
    '#d29ead',
    '#56cbd2',
    '#378698',
    '#326b7a',
    '#254d61',
    '#183f4d',
    '#13303f',
    '#091019',
    '#a42943',
    '#5f3441' 
  ];

  return (
    <TrackSection
      title="I Can Be"
      description={`"It tells the story of the other woman, and that happens in life, even if you don't mean to get into a situation like it, it's like, 
        I am the other girl, so I wanted to tell that story. Even though this girl is saying 
        'i'll be the other girl, I just want to be with you', 
        it's kind of depressing, the mood is dark, but she's not exactly happy.
        I knew it was gonna be somewhat controversial but I didn't mind it because hey, this is about life, that's what music is about." - Aaliyah`}
      imageSrc="/home/i-can-be.jpg"
      imageAlt="I Can Be Album Cover"
      gradientColors={gradientColors}
      reversed={false}
      singleColumn
    />
  );
}