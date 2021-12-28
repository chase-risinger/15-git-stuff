const router = require('express').Router();
const { Listing, User } = require('../models');

router.get('/', (req, res) => {
    // renders the homepage.handlebars (.handlebars is implied)
    res.render('homepage');
});


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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;