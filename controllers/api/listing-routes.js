const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Listing, User } = require('../../models');


// get all listings
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
                attributes: ['id', 'email', 'username']
            }

        ]
    })
        .then(dbListingData => res.json(dbListingData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one listing by it's id
router.get('/:id', (req, res) => {
    console.log('======================');

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
                attributes: ['id', 'email', 'username']
            }

        ]
    })
        .then(dbListingData => {
            if (!dbListingData) {
                res.status(404).json({ message: 'no listing found with this id' });
                return

            }
            res.json(dbListingData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//create a new listing
router.post('/', (req, res) => {
    Listing.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        user_id: 5
    })
        .then(dbListingData => res.json(dbListingData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update listing price/title/description
router.put('/:id', (req, res) => {
    Listing.update(
        {
            title: req.body.title,
            description: req.body.blog_content,
            price: req.body.price
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbListingData => {
            if (!dbListingData) {
                res.status(404).json({ message: 'No listing found with this id' });
                return;
            }
            res.json(dbListingData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Listing.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbListingData => {
            if (!dbListingData) {
                res.status(404).json({ message: 'No listing found with this id' });
                return;
            }
            res.json(dbListingData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;