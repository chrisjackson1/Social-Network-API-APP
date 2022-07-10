const { getDefaultSettings } = require("http2");
const { Schema, model } = require("mongoose");


const reactionSchema = new Schema(
    {
  reactionID: {
    type: Schema.Types.ObjectId

  },
  reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
  },
  username: {
      type: String,
      required: true,
  },
  createdAt: {
      type: Date,
      default: Date.now,
      get: getDate,

  },
    },
{
    toJSON: {
        getters: true,
    },
    id: false,
}
);

function getDate(date){
    return date;
}


module.exports = reactionSchema;