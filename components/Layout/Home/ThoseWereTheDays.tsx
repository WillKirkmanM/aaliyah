import TrackSection from "./TrackSection";

export default function ThoseWereTheDays() {
  const gradientColors = [
    '#e2a572',
    '#ae7647',
    '#895134',
    '#a55036',
    '#c83f25',
    '#652a1f',
    '#2e1414',
    '#6a7699',
    '#7a4e66',
    '#b99e7e' 
  ];

  return (
    <TrackSection
      title="Those Were The Days"
      description={`A nostalgic reflection on simpler times, where Aaliyah's smooth vocals 
        float over a dreamy production. The track perfectly captures the 
        bittersweet feeling of looking back on cherished memories while 
        acknowledging personal growth.`}
      imageSrc="/home/those-were-the-days.jpg"
      imageAlt="Those Were The Days Album Cover"
      gradientColors={gradientColors}
      reversed={false}
    />
  );
}