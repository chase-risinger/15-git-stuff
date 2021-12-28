const router = require('express').Router();
const sequelize = require('../config/connection');
const { Listing, User, Comment, Vote } = require('../models');
const withAuth = require('../utils/auth');

// get all listings for dashboard
router.get('/', withAuth, (req, res) => {
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

/* router.get('/edit/:id', withAuth, (req, res) => {
    Blog.findByPk(req.params.id, {
        attributes: [
            'id',
            'title',
            'blog_content',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE blog.id = vote.blog_id)'), 'vote_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbBlogData => {
            if (dbBlogData) {
                const blog = dbBlogData.get({ plain: true });

                res.render('edit-blog', {
                    blog,
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
 */
module.exports = router;
