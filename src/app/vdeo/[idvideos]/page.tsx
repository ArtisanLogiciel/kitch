import BarreDeRecherche from '../../../../Components/BarreDeRecherche';
import NavigLive from '../../../../Components/NaviguationLive';

export default function App(){

    return (
      <>
      <BarreDeRecherche />
      <NavigLive />
      <div className="WidthContainer h-full border-2 border-solid border-b-yellow-300 marginLeftVw">
        <div className='VdeoContainer'>
          <div className='Blockvideos'>
          </div>
       </div>
       </div>
     </>    
    )
}
