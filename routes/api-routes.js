// require("dotenv").config();
// const axios = require("axios");
// const db = require("../models");
// const path = require("path");

// DEPENDENCIES

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Brand = require("../models/Brand");

// CREATES A NEW USER

router.post("/", function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    Brand.create({
        name : req.body.name,
        description : req.body.description,
        logo : req.body.logo,
        link: req.body.link,
        supporting: req.body.supporting,
        conflicting: req.body.conflicting,
        reason: req.body.reason
    },
    function(err, user) {
        if (err)
        return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(user);
    });

});

// RETURNS ALL THE Brands IN THE DATABASE

router.get("/", function (req, res) {
    Brand.find({}, function(err, brands) {
        if (err)
        return res.status(500).send("There was a problem finding the brands.");
        res.status(200).send(brands);
    });
});

// GETS A SINGLE USER FROM THE DATABASE

router.get("/:id", function(req,res) { User.findById(req.params.id, function (err, brand) {
    if (err) 
        return res.status(500).send("There was a problem finding the brand.");
    if (!brand) 
        return res.status(404).send("No brand found.");
        res.status(200).send(brand);
    });
});

// DELETES A USER FROM THE DATABASE

router.delete("/:id", function(req,res) { User.findByIdAndRemove(req.params.id, function(err, brand) {
    res.status(200).send("Brand " + brand.name + "was deleted.");
    });
});

// UPDATES A SINGLE BRAND IN THE DATABASE

router.put('/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, brand) {
        if (err)
            return res.status(500).send("There was a problem updating the brand.");
            res.status(200).send(brand);
    });
});

module.exports = router;










// connecting to brands api
// module.exports = function(app) {
//     app.get("/api/brands", (req, res) => {
//         db.Brands.find().then(
//             (brandsData) => {
//                 res.json(brandsData);
//             }
//         ).catch(
//             (err) => {
//                 res.json({error: err});
//             }
//         );
//     });
// }

// // post request, connecting with google book search api, to send back the data for the books
//     app.post("/search", (req, res) => {
//         // set bookTitle to the req.body.title with spaces replaced with plus signs(+)
//         let bookTitle = req.body.title.replace(/\s/g, "+");
//         axios.get(
//             `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GBOOKS_KEY}`
//         ).then(
//             (response) => {
//                 res.json(response.data.items)
//             }
//         ).catch(
//             (err) => {
//                 res.json({error: error})
//             }
//         );
//     });

//     // post request to put returned book info into db, once uses wants to save that book
//     app.post("/api/books", (req, res) => {
//         db.Book.create(req.body).then(
//             (response) => {
//                 res.json({successful: response});
//             }
//         ).catch(
//             (err) => {
//                 res.json({error: err});
//             }
//         );
//     });

//     // delete request to remove the saved book 
//     app.delete("/api/books/:id", (req, res) => {
//         db.Book.findByIdAndDelete(req.params.id).then(
//             (response) => {
//                 res.json({successful: response});
//             }
//         ).catch(
//             (err) => {
//                 rres.json({error: err});
//             }
//         );
//     });

//     // Send every other request to the React app
//     // Define any API routes before this runs
//     app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//     });
// }