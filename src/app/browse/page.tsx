// Components
import Image from "next/image";

export default function Browsepage() {
  return (
   
    <div className='w-full border-2 border-solid border-transparent flex items-center justify-evenly row flex-wrap mb-[2%] z-30'>
    <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
       <div className='flex items-center justify-center'>
          <p className='text-white font-semibold text-[24px]'>Jeux</p>
      </div>
       <div>
          <Image className="tw-image vertical-selector__card_icon" 
                  alt="Icône jeux" width={65} height={65} 
                  src="https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg">
                      
          </Image>
      </div>       
    </div>
    <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
       <div className='flex items-center justify-center'>
          <p className='text-white font-semibold text-[24px]'>IRL</p>
      </div>
       <div>
          <Image className="tw-image vertical-selector__card_icon" 
                  alt="Icône jeux" width={65} height={65}
                  src="https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg">
                      
          </Image>
      </div>       
    </div>
    <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
       <div className='flex items-center justify-center'>
          <p className='text-white font-semibold text-[24px]'>Musique</p>
      </div>
       <div>
          <Image className="tw-image vertical-selector__card_icon h-[53px]" 
                  alt="Icône jeux" width={65} height={65}
                  src="https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg">
                      
          </Image>
      </div>       
    </div>
    <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
       <div className='flex items-center justify-center'>
          <p className='text-white font-semibold text-[24px]'>Esport</p>
      </div>
       <div>
          <Image className="tw-image vertical-selector__card_icon" 
                  alt="Icône jeux" width={65} height={65}
                  src="https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg">
                      
          </Image>
      </div>       
    </div>
    <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
       <div className='flex items-center justify-center'>
          <p className='text-white font-semibold text-[24px]'>Créatif</p>
      </div>
       <div>
          <Image className="tw-image vertical-selector__card_icon" 
                  alt="Icône jeux" width={65} height={65}
                  src="https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg">
                      
          </Image>
      </div>       
    </div>

</div> 

  );
}
