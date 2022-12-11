var Grocery = require("../models/grocery");

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send("Greetings from the Test controller!");
};

exports.grocery_create = function (req, res) {
  var product = new Grocery({
    name: req.body.name,
    quantity: req.body.quantity,
  });

  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send("Product Created successfully");
  });
};

exports.grocery_details = function (req, res) {
  Grocery.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

exports.grocery_update = function (req, res) {
  Grocery.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, product) {
      if (err) return next(err);
      res.send("Product udpated.");
    }
  );
};

exports.grocery_delete = function (req, res) {
  Grocery.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
