
export async function Boxe(){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Client-ID': process.env.DB_CLIENT || '',
            'Authorization': `Bearer 7tuq2nxz60gaaocwls9liy9secgdzg`,
          },
    };
    const res = await fetch('https://api.twitch.tv/helix/streams?language=fr', options)

    const twitch = await res.json()
    const TwitchData = twitch.data;
    return TwitchData
}

export  function Nombres(nombre: number){
        const kol = nombre.toString()
        const tab = kol.split('')
        const longueur = tab.length
        const reconvertir = tab.map(elmnt => parseFloat(elmnt))
        if (longueur === 4){
            const convertir = reconvertir.filter((element: any, index: number) => index < 2)
            const un = convertir[0];
            const deux = convertir[1];
            return `${un}.${deux}`
        }
        else{

            const rien = longueur - 3
            const convertir = reconvertir.filter((element: any, index: number) => index < rien)
            const valeur = convertir.toString().replaceAll(',', '')
            return valeur
        }

}

export function Image(view: string){
    const un = view.replace('{width}', '30')
    const deux = un.replace('{height}', '30')
    return deux
}
      
export default async function NavigLive(){
  const data = await Boxe()
  const chaine = 'Chaînes recommandées';
  const dataFiltrer = data.filter((element: any, index: number) => index < 10)

    return(
       <div style={{
        backgroundColor: '#efeff1',
        width: '19%',
        height: '100%',
        position: 'fixed',
        zIndex: '900',
        top:'9vh',
        left: 'auto',
        display: 'flex',
        flexDirection: 'column',
       }}>
            <div style={{border: '1px solid blue', width: '100%', height: '8%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <h2 style={{fontSize: '0.9em', fontWeight: '400'}}>{chaine.toLocaleUpperCase()}</h2>
                <svg width="3.5vw" height="3.5vh" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="ScIconSVG-sc-1q25cff-1 dSicFr"><g><path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path></g></svg>
            </div>
            <div style={{border: '1px solid orange', width: '100%', height: '90%', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap'}}>            
                {dataFiltrer.map((channelName: any) => (
                <>
                <div className="GridLive">
                    <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img  src={Image(channelName?.thumbnail_url)} style={{borderRadius: '50%', width: '30px', height: '30px'}}></img>
                    </div>
                    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent:'space-evenly', alignItems: 'center', flexDirection: 'row', flexWrap: 'nowrap'}}>
                        <div style={{width: '75%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}}>
                            <p>{channelName?.user_name}</p>
                            <p style={{fontSize: '13px', fontWeight: 'lighter'}}>{channelName?.game_name.length > 17 ? channelName?.game_name.substring(0, 18) + "..." : channelName?.game_name}</p>
                        </div>
                    <div style={{width: '25%', height: '100%', display: 'flex', justifyContent:'space-evenly', alignItems: 'center', flexDirection: 'row', flexWrap: 'nowrap'}}>
                        <div style={{backgroundColor: '#eb0400', width: '8px', height: '8px', borderRadius: '50%'}}></div>
                        <p style={{fontSize: '13px', fontWeight: 'lighter'}}>{channelName?.viewer_count < 1000 ? channelName?.viewer_count  : Nombres(channelName?.viewer_count)}<span>K</span></p>
                    </div>
                  </div>  
            </div>  
        </>
      ))}
            </div>
       </div>    
    )
}