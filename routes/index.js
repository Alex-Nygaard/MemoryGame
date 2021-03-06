var express = require("express");
var router = express.Router();

const gameStatus = require("../statTracker");

router.get("/play", function (req, res) {
    res.render("game.ejs");
});

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("splash.ejs", gameStatus);
});

module.exports = router;
