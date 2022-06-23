const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = [
    {
        username: "newuser",
        email: "newuser@cbc.ca",
        password: "password123",
    },
    {
        username: "newuser1",
        email: "newuser1@sogou.com",
        password: "password123",
    },
    {
        username: "newuser2",
        email: "newuser2@last.fm",
        password: "password123",
    },
    {
        username: "newuser3",
        email: "newuser3@goo.ne.jp",
        password: "password123",
    },
    {
        username: "newuser4",
        email: "newuser4@weather.com",
        password: "password123",
    },
    {
        username: "newuser5",
        email: "newuser5@imdb.com",
        password: "password123",
    },
    {
        username: "newuser6",
        email: "newuser6@feedburner.com",
        password: "password123",
    },
    {
        username: "newuser7",
        email: "newuser7@china.com.cn",
        password: "password123",
    },
    {
        username: "newuser8",
        email: "newuser8@google.ru",
        password: "password123",
    },
    {
        username: "newuser9",
        email: "newuser9@epa.gov",
        password: "password123",
    },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;