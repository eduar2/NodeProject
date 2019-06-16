'use strict';

var properties = require('../package.json')

var controllers = {
    get_message: (req, res)=> {
        if (!req.body.message || !req.body.from || !req.body.to || !req.body.timeToLifeSec){
            res.message("Invalid input");
        }
        let message = req.body.message
        let from = req.body.from
        let to = req.body.to
        let timeToLifeSec = req.body.timeToLifeSec
        var returnMessage = {
            message: "Hello " + to + " your message will be send"
        }
        res.json(returnMessage)
    },
};

module.exports = controllers;