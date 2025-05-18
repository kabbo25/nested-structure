import {flattenedTravelPlan} from "./flatPlaces.js";

const PlaceTree = ({place}) => {
    const currentNode = flattenedTravelPlan[place];
    return (
        <div className={'border border-black-500 mb-3 px-10'}>

            <li className={'text-4xl mb-3'}>{currentNode.title}</li>
                {currentNode.childIds.map(childPlace => (
                    <PlaceTree place={childPlace} key={flattenedTravelPlan[childPlace].title+'$'}/>
                ))}

        </div>
    )
}
export default PlaceTree;
