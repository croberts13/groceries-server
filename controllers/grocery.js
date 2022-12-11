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

  product.save().then(async () => res.send(await Grocery.find()));
};

exports.grocery_details = function (req, res) {
  Grocery.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

exports.grocery_update = function (req, res) {
  Grocery.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(async () => res.send(await Grocery.find()))
    .catch(() => res.send("failed", 304));
};

exports.grocery_delete = function (req, res) {
  const item = Grocery.findByIdAndRemove(req.params.id, async function (err) {
    if (err) return next(err);
    res.send(await Grocery.find());
  });
};
