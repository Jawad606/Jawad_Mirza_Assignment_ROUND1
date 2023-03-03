var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");
var Countries = new Schema(
  {
    name: {
      type: String,
    },
    cities: [{ id: { type: String }, name: { type: String } }],
  },
  {
    timestamps: true,
  }
);
Schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
module.exports = mongoose.model("Countries", Countries);
