'user client';
import BarreDeRecherche from "../../../../Components/BarreDeRecherche";
import NavigLive from "../../../../Components/NaviguationLive";
import Results from "./result";

export default function App() {
    return (
      <>
        <BarreDeRecherche />
        <NavigLive />
        <Results />  
      </>
    )
  }