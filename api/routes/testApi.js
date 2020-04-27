const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
    res.send({
        status: 'success',
        message: 'Hello from Backend'
    });
});

module.exports = router;