import Image from "next/image";
import NavBar from "./components/NavBar";
import ApiConnexion from "./components/ApiConnexion";
import Post from "./components/ApiConnexionNelson";
import TwitchStreamer from "./components/TwitchStreamer";
import TwitchComponent from "./components/TwitchComponent";

export default function Home() {
  return (
    <div>
      <NavBar />
      <TwitchStreamer streamerName="JeuSerieux" />
      <TwitchComponent />
      {/* <ApiConnexion /> */}
      {/* <Post /> */}
    </div>
  );
}
