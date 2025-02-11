import TrackSection from "./TrackSection";

export default function UGotNerve() {
  const gradientColors = [
    '#d19672',
    '#b03521',
    '#684430',
    '#35251f',
    '#212b51',
    '#111830',
    '#3f4441',
    '#848484',
    '#807c8c',
    '#07080b' 
  ];

  return (
    <TrackSection
      title="U Got Nerve"
      description={`An assertive anecdote, Aaliyah has given 'chances on top of chances', she needs to 'see new beginnings' but before that, the partner needs to 'get his skeletons up out her closet', "Who do you think you are now?". Aaliyah's reluctance to be taken advantage of shows the mature and future driven persona of her character.`}
      imageSrc="/home/u-got-nerve.jpg"
      imageAlt="U Got Nerve Album Cover"
      gradientColors={gradientColors}
      reversed={true}
    />
  );
}