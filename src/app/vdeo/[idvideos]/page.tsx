import BarreDeRecherche from '../../../../Components/BarreDeRecherche';
import NavigLive from '../../../../Components/NaviguationLive';
import VideosContainer from './videos';
import { TwitchChat } from './Chatting';

export default function App(){

    return (
      <>
      <BarreDeRecherche />
      <NavigLive />
      <div className="WidthContainer h-full border-2 border-solid border-b-yellow-300 marginLeftVw">
        <div className='w-full border-2 border-solid  grid grid-cols-[70%_30%]'>
          <div className='w-full border-2 border-solid flex justify-start items-start flex-col'>
              <VideosContainer />
          </div>
          <TwitchChat />
       </div>
       </div>
     </>    
    )
}
