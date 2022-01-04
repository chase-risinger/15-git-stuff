const router = require('express').Router();
const { Listing, User } = require('../models');

// get a listing based on search parameters
router.get('/title/:title', (req, res) => {
    console.log('======================');
    Listing.findAll({
        where: {
            title: req.params.title
        },
        attributes: [
            'id',
            'title',
            'price',
            'description',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['id', 'email', 'username']
            }

        ]
    })
        .then(dbListingData => {
            if (dbListingData) {
                const listings = dbListingData.map(listing => listing.get({ plain: true }));
                res.render('search-results', {
                    listings
                })
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });

});

module.exports = router;