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
          {/* <div className="w-full grid grid-cols-[19%_81%] border-3 border-dashed border-pink-500 box-border absolute top-[9vh] bg-[#f7f7f8]"> */}
          {/* Si on met FLEX alors le NavigationLive passe par dessus car position fixed !!!??? J'ai essayé avec STICKY et TOP-0 mais marche pas...
          car il faut mettre un HEIGHT au parent, mais on vt que ça soit 100% (et ça marche pas avec cette valeur) */}
          <div className="w-full grid grid-cols-[19%_81%] h-full border-4 border-dashed border-pink-500 box-border absolute top-[9vh] bg-[#f7f7f8]">
            <div><NavigationLive /></div>
            {/* <div className="m-[0px_0.4rem_0px_0.4rem] w-[98%] p-[3vh_1vw_3vh_1vw] flex items-start justify-start flex-col flex-wrap border-2 border-solid  border-[#00FF95]"> */}
            <div className="m-1 p-[5px] flex flex-col flex-wrap items-start border-2 border-solid  border-[#00FF95]">
              {children}
            </div>
          </div>
      </body>
      {/* <body>
        <MainAppBar />
        <div className="w-full grid grid-cols-[19%_81%] border-4 border-dashed border-pink-500 box-border absolute top-[11vh]">
        {/* Position : absolute avec top 9vh = 9% du Viewport Height (car NavBat = 9vh)  */}
        {/* <div className="w-full border-4 border-dashed border-pink-500 absolute top-[9vh]"> */}
          {/* <NavigationLive />
          <div className="m-[0px_0.4rem_0px_0.4rem] w-[98%] p-[3vh_1vw_3vh_1vw] flex items-start justify-start flex-col flex-wrap border-2 border-solid  border-[#00FF95]"> */}
          {/* <div className="flex items-start justify-start flex-col flex-wrap border-2 border-solid  border-[#00FF95]"> */}
            {/* {children} */}
          {/* </div>
        </div>
      </body> */} 
    </html>
  );
}
