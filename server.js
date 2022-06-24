const path = require("path");
require("dotenv").config();
const express = require("express");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require("./utils/helpers");

const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'secret secret',
    cookie: { maxAge: 10800000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));
app.use(express.json());

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));



app.use(express.urlencoded({ extended: true }));


app.use(require("./controllers/"));


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});