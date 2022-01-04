const router = require('express').Router();
const { Listing, User } = require('../models');

router.get('/', (req, res) => {
    console.log('======================');
    Listing.findAll({
        attributes: [
            'id',
            'title',
            'price',
            'description',
            'created_at',
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbListingData => {
            const listings = dbListingData.map(listing => listing.get({ plain: true }));

            res.render('homepage', {
                listings,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//get a single listing
router.get('/listing/:id', (req, res) => {
    Listing.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'price',
            'description',
            'title',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username', 'email']
            }
        ]
    })
        .then(dbListingData => {
            if (!dbListingData) {
                res.status(404).json({ message: 'No listing found with this id' });
                return;
            }

            // serialize the data
            const listing = dbListingData.get({ plain: true });

            // pass data to template
            res.render('single-listing', { listing });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get a listing based on search parameters
router.get('/title/:title', (req, res) => {
    Listing.findAll({
        where: {
            title: req.params.title
        },
        attributes: [
            'id',
            'title',
            'description',
            'price',
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
                const listing = dbListingData.get({ plain: true });
                res.render('search-results', {
                    listing
                })
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });

})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;