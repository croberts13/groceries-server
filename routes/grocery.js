var express = require("express");
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var grocery_controller = require("../controllers/grocery");
/** @type {Mongoose.Model} */
const Grocery = require("../models/grocery");

// a simple test url to check that all of our files are communicating correctly.
router.get("/test", grocery_controller.test);

router.get("/", (req, res) => {
  Grocery.find().then((groceries) => res.send(groceries));
});

router.post("/", grocery_controller.grocery_create);

router.get("/:id", grocery_controller.grocery_details);

router.put("/:id", grocery_controller.grocery_update);

router.delete("/:id/", grocery_controller.grocery_delete);

module.exports = router;
