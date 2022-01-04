const router = require('express').Router();
const { Listing, User } = require('../models');

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

});

module.exports = router;