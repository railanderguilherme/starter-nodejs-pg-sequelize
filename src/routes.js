const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({evento: "Hello World x"});
});

module.exports = routes;