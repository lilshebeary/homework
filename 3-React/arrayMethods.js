// Array.map() review

// const names = ['anne', 'barry', 'chloe'];
// const bigNames = names.map(name => name.toUpperCase());
// console.log(bigNames);
// console.log(names);

//Array.filter() & Array.find()
//const newArray = Array.filter(callbackFn);
//const value = Array.find(callbackFn);

const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6
    },
       {
        id: 5,
        title: 'cat bitessss',
        favorite: false,
        featured: 'true',
        points: 19
    }
];

// const myFavoriteThings = things.filter((thing) => thing.favorite);
// console.log(myFavoriteThings);
// console.log(things);

// const thingsWithOverFiftyPoints = things.filter((thing) => thing.points > 50);
// console.log(thingsWithOverFiftyPoints);

// things.find((thing) => thing.id === 2);

// const selectThingByID = (id) => {
//     return things.find((thing) => thing.id === id)
// };
// const selectedThing = selectThingByID(2);
// console.log(selectedThing);

const featuredThings = things.filter(thing => thing.featured);
console.log(featuredThings[0], 'featured things');

const firstFeatured = things.find(thing => thing.featured)
console.log(firstFeatured);