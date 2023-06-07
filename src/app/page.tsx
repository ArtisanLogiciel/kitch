// Components
import { LiveCarousel } from "../Components/LiveCarousel";
import { LiveChannels } from "../Components/LiveChannels";
import { Categories } from "../Components/Categories";
import { SelectorCard } from "../Components/SelectorCard";
import { Vogue } from "@/Components/Vogue";
import { RecentlyGames } from "@/Components/RecentlyGames";
import { GamesLatest } from "@/Components/LatestGamesStreams";
import { GamesRecom } from "@/Components/RecommandationsGames";
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
      <LiveChannels  Propstags={true}/>
      {/* @ts-expect-error Async Server Component */}
      <SelectorCard />
      {/* @ts-expect-error Async Server Component */}
      <Categories />
      <Vogue />
      <RecentlyGames />
      <GamesLatest />
      <GamesRecom />
      <Creative />
      <Fight />
      <Platform />
      <CarSimulation />
      <Sports />
      <Footer />
    </>
  );
}
