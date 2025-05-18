export const initialTravelPlan = {
    id: 0,
    title: '(Root)',
    childPlaces: [{
        id: 1,
        title: 'Earth',
        childPlaces: [{
            id: 2,
            title: 'Africa',
            childPlaces: [{
                id: 3,
                title: 'Kenya',
                childPlaces: []
            }, {
                id: 4,
                title: 'Egypt',
                childPlaces: []
            }]
        }, {
            id: 5,
            title: 'Asia',
            childPlaces: [{
                id: 6,
                title: 'China',
                childPlaces: []
            }, {
                id: 7,
                title: 'Japan',
                childPlaces: []
            }]
        }]
    }, {
        id: 8,
        title: 'Moon',
        childPlaces: [{
            id: 9,
            title: 'Tycho',
            childPlaces: []
        }]
    }]
};
