const PlaceTree = ({place}) => {
    return (
        <div className={'border border-black-500 mb-3 px-10'}>
            <li className={'text-4xl mb-3'}>{place.title}</li>
                {place.childPlaces.map(childPlace => (
                    <PlaceTree place={childPlace} key={childPlace.id}/>
                ))}

        </div>
    )
}
export default PlaceTree;
