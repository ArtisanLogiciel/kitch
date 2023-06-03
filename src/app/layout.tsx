import "../styles/globals.css";
import { MainAppBar } from "../Components/MainAppBar";
import NavigationLive from "../Components/NaviguationLive";

export const metadata = {
  title: "Kitch",
  description: "Clone de Twitch mais en version Kitch",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <MainAppBar />
          <div className="w-full grid grid-cols-[19%_81%] border-3 border-dashed border-pink-500 box-border absolute top-[11vh]">
            <div><NavigationLive /></div>
            <div className="m-[0px_0.4rem_0px_0.4rem] w-[98%] p-[3vh_1vw_3vh_1vw] flex items-start justify-start flex-col flex-wrap border-2 border-solid  border-[#00FF95]">{children}</div>
          </div>
      </body>
    </html>
  );
}
