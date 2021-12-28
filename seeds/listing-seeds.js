const { Listing } = require('../models');

const listingData = [
    {
        title: 'Tennis Racket',
        description: 'An old worn out tennis racket that nobody wants anymore.',
        price: 2.55,
        user_id: 1
    },
    {
        title: 'Baseball Cards',
        description: '100+ baseball cards from 1998 in mint condition',
        price: 55.00,
        user_id: 2
    },
    {
        title: 'Widescreen TV',
        description: '48 inch Television set with hdmi inputs',
        price: 125,
        user_id: 3
    },
    {
        title: 'Fender Stratocaster',
        description: 'Tobacco sunburst 2012, American made Stratocaster, mint condition',
        price: 600.00,
        user_id: 4
    },
    {
        title: 'Alligator Boots',
        description: 'Snazzy blue aligator boots, slightly worn',
        price: 2.55,
        user_id: 5
    },
    {
        title: 'Abbey Road Vinyl',
        description: '1st edition, signed by Ringo Starr',
        price: 9500.00,
        user_id: 1
    },
    {
        title: 'Pokemon Cards',
        description: 'A bulbasaur, a pikachu and a charizard',
        price: 150,
        user_id: 2
    },
    {
        title: 'Nintendo Switch',
        description: 'Mint condition nintendo switch, barely been played',
        price: 225.00,
        user_id: 3
    },
    {
        title: 'Microwave',
        description: 'Toshiba brand microwave with 18 different settings including defrost, turkey and scrambled eggs',
        price: 25.50,
        user_id: 4
    },
    {
        title: 'Lawnmower',
        description: 'Toro brand lawnmower, 4.5 horsepower, slightly worn',
        price: 55.00,
        user_id: 5
    },
]

const seedListings = () => Listing.bulkCreate(listingData);

module.exports = seedListings;