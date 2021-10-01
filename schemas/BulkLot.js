const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BulkLotSchema = new Schema({
  lot:                { type: String, required: true },
  item:               { type: Schema.Types.ObjectId, ref: 'bulks', required: true },
  item_type:          { type: String, default: 'bulk' },
  facility_location:  { type: String },
  warehouse_location: { type: String },
  purchase_order:     { type: Number },
  amount:             { type: Number },
  amount_units:       { type: String },
  date_created:       { type: Date, default: Date.now }
});

module.exports = BulkLotSchema;