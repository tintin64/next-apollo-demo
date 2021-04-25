const { gql } = require('apollo-server-express');
const typeDefUser = require('./user');
const typeDefAddress = require('./address');

module.exports = gql`
    ${typeDefAddress}
    ${typeDefUser}
`;
