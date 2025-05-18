
import PlaceTree from "./PlaceTree.jsx";
import {initialTravelPlan as places} from "./places.jsx";
import {flattenedTravelPlan} from "./flatPlaces.js";

function App() {
   const childPlaces = flattenedTravelPlan[0].childIds;
  return (
    <>
        <ol className={'bg-green-100 m-20'}>

        {
            childPlaces.map(place => (
                <div className={'mb-5'}>

                    <PlaceTree place={place}  key={place+'$'}/>
                </div>
            ))
        }
        </ol>
    </>
  )
}

export default App
