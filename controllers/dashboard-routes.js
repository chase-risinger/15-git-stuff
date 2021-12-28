const router = require('express').Router();
const sequelize = require('../config/connection');
const { Listing, User } = require('../models');
const withAuth = require('../utils/auth');

// get all listings for dashboard
router.get('/', (req, res) => {
    console.log(req.session);
    console.log('======================');
    Listing.findAll({
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
                attributes: ['username']
            }
        ]
    })
        .then(dbListingData => {
            const listings = dbListingData.map(listing => listing.get({ plain: true }));
            res.render('dashboard', { listings, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Listing.findByPk(req.params.id, {
        attributes: [
            'id',
            'title',
            'description',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }]

    })
        .then(dbListingData => {
            if (dbListingData) {
                const listing = dbListingData.get({ plain: true });

                res.render('edit-listing', {
                    listing,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
