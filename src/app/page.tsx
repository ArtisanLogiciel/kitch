// Components
import { LiveCarousel } from "../Components/LiveCarousel";
import { LiveChannels } from "../Components/LiveChannels";
import { Categories } from "../Components/Categories";
import { SelectorCategory } from "../Components/SelectorCategory";
import { Vogue } from "@/Components/Vogue";
import { RecentlyGames } from "@/Components/RecentlyGames";
import { GamesLatest } from "@/Components/LatestGamesStreams";
import { Games_1 } from "@/Components/GamesOne";
import { Games_Two } from "@/Components/GamesTwo";
import { Games_3 } from "@/Components/GamesThree";
import { Creative } from "@/Components/Creative";
import { Fight } from "@/Components/Fight";
import { Platform } from "@/Components/PlatformAndGames";
import { CarSimulation } from "@/Components/Simulation";
import { Sports } from "@/Components/Sport";
import Footer from "@/Components/AmazonLogo";

export default function Homepage() {
  return (
    
    <>
      {/* @ts-expect-error Async Server Component */}
        <LiveCarousel />
      {/* @ts-expect-error Async Server Component */}
      <LiveChannels  />
      {/* @ts-expect-error Async Server Component */}
      <SelectorCategory />
      {/* @ts-expect-error Async Server Component */}
      <Categories />
      {/* @ts-expect-error Async Server Component */}
      <Vogue />
      {/* @ts-expect-error Async Server Component */}
      <RecentlyGames />
      {/* @ts-expect-error Async Server Component */}
      <GamesLatest />
      {/* @ts-expect-error Async Server Component */}
      <Games_1 />
      {/* @ts-expect-error Async Server Component */}
      <Games_Two />
      {/* @ts-expect-error Async Server Component */}
      <Games_3 />
      {/* @ts-expect-error Async Server Component */}
      <Creative />
      {/* @ts-expect-error Async Server Component */}
      <Fight />
      {/* @ts-expect-error Async Server Component */}
      <Platform />
      {/* @ts-expect-error Async Server Component */}
      <CarSimulation />
      {/* @ts-expect-error Async Server Component */}
      <Sports />
      {/* @ts-expect-error Async Server Component */}
      <Footer />
    </>
  );
}
