const items = [
        { name: 'Bike', price: 100 },
        { name: 'TV', price: 200 },
        { name: 'Album', price: 10 },
        { name: 'Book', price: 5 },
        { name: 'Phone', price: 500 },
        { name: 'Computer', price: 1000 },
        { name: 'Keyboard', price: 25 },
    ]
    //This is a.map
const ItemNames = items.map((item) => {
    return item.price <= 500;
})


//this is find item ?
/**
const foundItem = items.find((item) => {

    return item.name === 'Book';
})


console.log(foundItem);*/