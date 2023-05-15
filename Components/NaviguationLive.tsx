
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

      
export default async function NavigLive(){
  const data = await Boxe()
  const chaine = 'Chaînes recommandées';
  
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
                <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap', border: '1px solid skyblue'}}>
                    <div style={{width: '40%', height: '100%', display: 'flex', justifyContent:'space-evenly', alignItems: 'center', flexDirection: 'row', flexWrap: 'nowrap'}}>
                        <div style={{backgroundColor: 'gray', width: '25px', height: '25px', borderRadius: '50%'}}></div>
                        <div>
                            <p>Humility</p>
                            <p style={{fontSize: '13px', fontWeight: 'lighter'}}>Dofus</p>
                        </div>
                    </div>
                    <div style={{width: '20%', height: '100%', display: 'flex', justifyContent:'space-evenly', alignItems: 'center', flexDirection: 'row', flexWrap: 'nowrap'}}>
                        <div style={{backgroundColor: '#eb0400', width: '8px', height: '8px', borderRadius: '50%'}}></div>
                        <p style={{fontSize: '13px', fontWeight: 'lighter'}}>8,3 K</p>
                    </div>
                </div>
                <div>
                {data.map((channelName: any) => (
        <div key={channelName.user_name}>{channelName.user_name}</div>
      ))}
    </div>
                <div>Block 3</div>
            </div>
       </div>    
    )
}