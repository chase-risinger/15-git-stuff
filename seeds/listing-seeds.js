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
    {
        title: 'Microwave',
        description: 'Another microwave, this one is way more expensive',
        price: 600,
        user_id: 6
    },
    {
        title: 'Lawnmower',
        description: 'Another lawnmower, this one is in horrible shape so it is free',
        price: 0,
        user_id: 7
    },
    {
        title: 'Nintendo Switch',
        description: 'Another Nintendo Switch, but Im taking advantage of the fact that there is a semiconductor shortage',
        price: 900,
        user_id: 8
    },
    {
        title: 'Pokemon Cards',
        description: 'More Pokemon cards, but these ones are lame',
        price: 1.50,
        user_id: 9
    },
    {
        title: 'Abbey Road Vinyl',
        description: 'Regular old record, not signed by anybody',
        price: 30.00,
        user_id: 10
    },
    {
        title: 'Alligator Boots',
        description: 'BRAND NEW! NEVER BEEN WORN!!!',
        price: 75,
        user_id: 9
    },
    {
        title: 'Tennis Racket',
        description: 'BRAND NEW! NEVER EVEN BEEN SWUNG!!!',
        price: 50,
        user_id: 8
    },
    {
        title: 'Baseball Cards',
        description: '2 baseball cards, some schmucks nobody heard of',
        price: 1,
        user_id: 7
    },
    {
        title: 'Widescreen TV',
        description: '10 inch Television set with hdmi inputs',
        price: 25,
        user_id: 6
    },
    {
        title: 'Fender Stratocaster',
        description: 'fire engine red, signed by all the members of KISS',
        price: 2500.00,
        user_id: 10
    },
]

const seedListings = () => Listing.bulkCreate(listingData);

module.exports = seedListings;