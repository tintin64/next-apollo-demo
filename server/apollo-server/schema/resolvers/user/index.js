const faker = require('faker');

const users = Array.from(
    { length: 2000 },
    () => faker.helpers.userCard()
);

const getAllUsers = () => users;

const getUsers = (offset, limit) => users.slice(offset, offset+limit);

module.exports = (_, { offset, limit }) => {
    const result = limit ? getUsers(offset, limit) : getAllUsers();
    return {
        result,
        count: users.length
    }
};