import TrackSection from "./TrackSection";

export default function NeverNoMore() {
  const gradientColors = [
    '#1e7fbf',
    '#39c1ed',
    '#19578e',
    '#0c162f',
    '#cfb7c5',
    '#13335d',
    '#5b3742',
    '#616261',
    '#283d47',
    '#399c94' 
  ];

  return (
    <TrackSection
      title="Never No More"
      description={`A melancholic balad symbolising Aaliyah's refusal, forbidding the hedonistic temptations that plague partners. "The song was very powerful, to stand up and say 'I'm not going to take it anymore, I'm not going to let you put your hands on me again,' is something very great."`} 
      imageSrc="/home/never-no-more.jpg"
      imageAlt="Never No More Album Cover"
      gradientColors={gradientColors}
      reversed={true}
    />
  );
}