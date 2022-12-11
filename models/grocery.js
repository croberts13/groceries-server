var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GrocerySchema = new Schema(
  {
    name: { type: String, required: true, max: 100 },
    quantity: { type: Number, required: true },
  },
  { collection: "grocery" }
);

// Export the model
module.exports = mongoose.model("Grocery", GrocerySchema);
