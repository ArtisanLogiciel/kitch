"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";

export default function NavBar() {
  const [search, setSearch] = React.useState<string>();
  const router = useRouter();
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.currentTarget.value);
  }
  console.log("test");
  const Send = () => {
    console.log(search);
  };
  return (
    <AppBar position="fixed" sx={{
      width: '100%',
      height: '9vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      color: 'black',
  }}>
      <div style={{
          border: '2px solid transparentt',
          width: '15%',
          height: '100%',
          display: 'flex',
          alignItems : 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          flexWrap: 'nowrap',
      }}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '25%'}} onClick={() => router.push(`/`)}>
              <Image alt="logo twitch" src="/Twitch-icon-purple.png" width={24} height={24} />
          </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '50%'}}>
              <p style={{fontSize: '14px', fontWeight: '500'}} id="Parcourir">Parcourir</p>
          </div>
           <div style={{display: 'flex', width: '25%', height: '100%', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center'}}>
                  <div className="Points"></div>
                  <div className="Points"></div>
                  <div className="Points"></div>
           </div>
      </div>
      <div style={{
          border: '2px solid transparent',
          width: '31%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
          <form onSubmit={Send} style={{
              width: '100%', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              }}>
              <input 
              type="search"
              placeholder="Rechercher"
              onChange={handleSearch}
              id="BarreSearch"
               />
              <button type="submit" id="BTNFly"><svg width="80%" height="80%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" data-a-selector="tw-core-button-icon" className="ScIconSVG-sc-1q25cff-1 dSicFr"><g><path fillRule="evenodd" d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z" clipRule="evenodd"></path></g></svg></button>
          </form>
      </div>

      <div style={{
      border: '2px solid transparent',
      width: '23%',
      height: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'nowrap',      
      }}>
     
     <svg width="3.5%" height="3.5%" viewBox="0 0 20 20"><path fillRule="evenodd" d="M13.798 10.456 10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z" clipRule="evenodd"></path></svg>
      <button className="BTNLogin">Se Connecter</button>
      <button className="BTNSub"> S{"'"}inscrire</button>
      <svg width="3.5%" height="3.5%" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 7a5 5 0 1 1 6.192 4.857A2 2 0 0 0 13 13h1a3 3 0 0 1 3 3v2h-2v-2a1 1 0 0 0-1-1h-1a3.99 3.99 0 0 1-3-1.354A3.99 3.99 0 0 1 7 15H6a1 1 0 0 0-1 1v2H3v-2a3 3 0 0 1 3-3h1a2 2 0 0 0 1.808-1.143A5.002 5.002 0 0 1 5 7zm5 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" clipRule="evenodd"></path></svg>
      </div>
    </AppBar>
  );
}
