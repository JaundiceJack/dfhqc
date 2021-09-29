const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FinishedGoodSchema = new Schema({
  number: { type: Number, required: true, unique: true },
  name:   { type: String, required: true },
  bulk:   { type: Schema.Types.ObjectId, ref: 'bulks' },
  label:  { type: String }
});

module.exports = FinishedGoodSchema;
