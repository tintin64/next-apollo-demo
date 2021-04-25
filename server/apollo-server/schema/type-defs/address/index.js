const { gql } = require('apollo-server-express');

module.exports = gql`
    type Address {
      street: String!,
      city: String!,
      zipcode: String!
    }
`;