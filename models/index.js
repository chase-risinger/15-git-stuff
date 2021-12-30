const Listing = require('./Listing');
const User = require('./User');

User.hasMany(Listing, {
    foreignKey: 'user_id'
});

Listing.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Listing };