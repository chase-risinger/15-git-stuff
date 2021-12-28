const router = require('express').Router();
const sequelize = require('../config/connection');
const { Listing, User } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
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
                attributes: [ 'username']
            }
        ]
    })
    .then(dblistingData => {
        const listings = dblistingData.map(listing => listing.get({ plain: true }));

        
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single listing
router.get('/listing/:id', (req, res) => {
    Listing.findOne({
      where: {
        id: req.params.id
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
            attributes: [ 'username']
        }
    ]
})
.then(dbListingData => {
    if (!dbListingData) {
      res.status(404).json({ message: 'No listing found with this id' });
      return;
    }

    const post = dbListingData.get({ plain: true });

    res.render('single-listing', {
      listing,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});



router.get('/', (req, res) => {
    // renders the homepage.handlebars (.handlebars is implied)
    res.render('homepage');
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;