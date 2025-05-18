
import PlaceTree from "./PlaceTree.jsx";
import {initialTravelPlan as places} from "./places.jsx";

function App() {
   const childPlaces = places.childPlaces;
  return (
    <>
        <ol className={'bg-green-100 m-20'}>

        {
            childPlaces.map(place => (
                <div className={'mb-5'}>

                    <PlaceTree place={place}  key={place.id}/>
                </div>
            ))
        }
        </ol>
    </>
  )
}

export default App
