const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    pro_name: { type: String, required: true },
    pro_price: { type: Number, required: true },
    pro_selPrice: { type: Number, required: true },
    pro_info: { type: String, required: true },
    t_id: { type: Schema.Types.ObjectId, ref: "Trainer", required: true },
    pro_image: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
