const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let CategorySchema = new Schema({
  name: {
    type: String,
  },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

module.exports = mongoose.model("Category", CategorySchema);