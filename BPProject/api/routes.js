'use strict';

var controller = require('./controller');


module.exports = function (app) {
    app.post('/devops/', (req, res) => {
        if(!req.headers["x-parse-rest-api-key"]){
            res.json({
                message: "FORBIDDEN"
            });
        }
        else
            controller.get_message(req, res);
    });

    app.use(function (req, res, next) {
        console.log("1")
        var err = new Error('Path or Method Not Found');
        next(err);
    });
    
    app.use(function (err, req, res, next) {
        console.log("2")
        console.log("message: " + err)
        
            res.status(err.status || 500);
            res.json({
            status: 404,
            message: err.message
        });
        
    });

};