const router = require('express').Router();

router.get('/', (req, res) => {
    // renders the homepage.handlebars (.handlebars is implied)
    res.render('homepage');
});

module.exports = router;