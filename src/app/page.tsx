import BarreDeRecherche from "../../Components/BarreDeRecherche"
import NavigLive from "../../Components/NaviguationLive";
import Container from "../../Components/ContainerHome";


export default function Homepage() {
  return (
    <>
      <BarreDeRecherche />
      <div className="w-full grid grid-cols-[19%_81%] border-3 border-dashed border-pink-500 box-border absolute top-[11vh]">
        <div><NavigLive /></div>
        <div><Container /></div>  
      </div>
    </>

  )
} 
