export async function SelectorCard(){
    return(
        <div className='w-full border-0   flex items-center justify-evenly row flex-wrap mb-[2%]'>
                  <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
                     <div className='flex items-center justify-center'>
                        <p className='text-white font-semibold text-[24px]'>Jeux</p>
                    </div>
                     <div>
                        <img className="tw-image vertical-selector__card_icon" 
                                alt="Icône jeux" sizes="65px" 
                                src="https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg">
                                    
                        </img>
                    </div>       
                  </div>
                  <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
                     <div className='flex items-center justify-center'>
                        <p className='text-white font-semibold text-[24px]'>IRL</p>
                    </div>
                     <div>
                        <img className="tw-image vertical-selector__card_icon" 
                                alt="Icône jeux" sizes="65px" 
                                src="https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg">
                                    
                        </img>
                    </div>       
                  </div>
                  <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
                     <div className='flex items-center justify-center'>
                        <p className='text-white font-semibold text-[24px]'>Musique</p>
                    </div>
                     <div>
                        <img className="tw-image vertical-selector__card_icon h-[53px]" 
                                alt="Icône jeux" sizes="65px" 
                                src="https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg">
                                    
                        </img>
                    </div>       
                  </div>
                  <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
                     <div className='flex items-center justify-center'>
                        <p className='text-white font-semibold text-[24px]'>Esport</p>
                    </div>
                     <div>
                        <img className="tw-image vertical-selector__card_icon" 
                                alt="Icône jeux" sizes="65px" 
                                src="https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg">
                                    
                        </img>
                    </div>       
                  </div>
                  <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
                     <div className='flex items-center justify-center'>
                        <p className='text-white font-semibold text-[24px]'>Créatif</p>
                    </div>
                     <div>
                        <img className="tw-image vertical-selector__card_icon" 
                                alt="Icône jeux" sizes="65px" 
                                src="https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg">
                                    
                        </img>
                    </div>       
                  </div>
        
            </div> 
    )
}