const router = require('express').Router();

const userRoutes = require('./user-routes');
const listingRoutes = require('./listing-routes');

router.use('/users', userRoutes);
router.use('/listings', listingRoutes);


module.exports = router;