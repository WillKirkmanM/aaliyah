import AlbumSection from "@/components/Layout/AlbumSection";
import IntroductionSection from "../components/IntroductionSection";
import StartListening from "@/components/Layout/StartListening";
import WeNeedAResolution from "@/components/Layout/Home/WeNeedAResolution";
import LooseRap from "@/components/Layout/Home/LooseRap";
import RockTheBoat from "@/components/Layout/Home/RockTheBoat";
import MoreThanAWoman from "@/components/Layout/Home/MoreThanAWoman";
import FullScreenVideo from "@/components/Video/FullScreenVideo";
import NeverNoMore from "@/components/Layout/Home/NeverNoMore";
import ICare4U from "@/components/Layout/Home/ICare4U";
import ExtraSmooth from "@/components/Layout/Home/ExtraSmooth";
import ReadBetweenTheLines from "@/components/Layout/Home/ReadBetweenTheLines";
import UGotNerve from "@/components/Layout/Home/UGotNerve";
import IRefuse from "@/components/Layout/Home/IRefuse";
import ItsWhatever from "@/components/Layout/Home/ItsWhatever";
import ICanBe from "@/components/Layout/Home/ICanBe";
import ThoseWereTheDays from "@/components/Layout/Home/ThoseWereTheDays";
import WhatIf from "@/components/Layout/Home/WhatIf";
import TryAgain from "@/components/Layout/Home/TryAgain";
import Hero from "@/components/Hero";
import SectionTransition from "@/components/SectionTransition";
import FullScreenLocalVideo from "@/components/Video/FullScreenLocalVideo";

export default function Home() {
  return (
    <>
      <Hero />
       <FullScreenLocalVideo
       title={"Aaliyah's Message"}
        autoplay={true}
        muted={false}
        scrollToNext={true}
        id="rock-the-boat"
      /> 
        {/* <IntroductionSection /> */}
        {/* <FullScreenVideo videoId="Q6Jbq0_Kv3s" start={27} end={80} id="introduction" scrollToNext /> */}
        <AlbumSection />
        <FullScreenVideo videoId="J8Cj4HoGG6Y" scrollToNext />
        <WeNeedAResolution />
        <LooseRap />
        <FullScreenVideo videoId="j578MlA87Gg" start={144} end={201} scrollToNext />
        <RockTheBoat />
        <MoreThanAWoman />
        <FullScreenVideo videoId="ECrvgCyR0tM" scrollToNext />
        <NeverNoMore />
        <ICare4U />
        <ExtraSmooth />
        <ReadBetweenTheLines />
        <UGotNerve />
        <IRefuse />
        <FullScreenVideo videoId="tt0TrfzaExA" scrollToNext />
        <ItsWhatever />
        <ICanBe />
        <ThoseWereTheDays />
        <WhatIf />
        <TryAgain />
        <FullScreenVideo videoId="mRJF-hZ6Gcs" scrollToNext />
        <StartListening />
      </>
  );
}