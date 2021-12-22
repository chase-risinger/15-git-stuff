const { Post } = require('../models');

const postData = [
    {
        title: 'tennis racket',
        description: 'an old worn out tennis racket that nobody wants anymore.',
        price: 2.55,
        user_id: 1
    },
    {
        title: 'baseball cards',
        description: '100+ baseball cards from 1998 in mint condition',
        price: 55.00,
        user_id: 2
    },
    {
        title: 'widescreen tv',
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
        title: 'Alligator boots',
        description: 'Snazzy blue aligator boots, slightly worn',
        price: 2.55,
        user_id: 5
    },
    {
        title: 'Abbey Road vinyl',
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
        description: 'mint condition nintendo switch, barely been played',
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

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;