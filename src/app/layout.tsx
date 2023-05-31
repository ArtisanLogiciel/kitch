import "../styles/globals.css";
//import { MainAppBar } from "../Components/MainAppBar";
import { MainAppBar } from '@/Components/MainAppBar'
//import NavigationLive from "../Components/NaviguationLive";
import NavigationLive from "@/Components/NaviguationLive";

export const metadata = {
  title: "Kitch",
  description: "Clone de Twitch mais en version Kitch",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <MainAppBar />
        <NavigationLive />
        {children}
      </body>
    </html>
  );
}
