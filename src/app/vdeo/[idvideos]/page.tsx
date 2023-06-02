import BarreDeRecherche from '../../../../Components/BarreDeRecherche';
import NavigLive from '../../../../Components/NaviguationLive';
import VideosContainer from './videos';
import { TwitchChat } from './Chatting';

export default function App(){

    return (
      <>
      <BarreDeRecherche />
      <div className="w-full grid grid-cols-[19%_81%] border-3 border-dashed border-pink-500 box-border absolute top-[11vh]">
        <div><NavigLive /></div>
          <div className="m-[0px_0.4rem_0px_0.4rem] w-[98%] p-[3vh_1vw_3vh_1vw] flex items-start justify-start flex-col flex-wrap border-2 border-solid  border-[#00FF95]">
            <div className='w-full border-2 border-solid  grid grid-cols-[70%_30%]'>
              <div className='w-full border-2 border-solid flex justify-start items-start flex-col'>
                  <VideosContainer />
              </div>
              <TwitchChat />
          </div>
          </div>   
      </div>
     </>    
    )
}
