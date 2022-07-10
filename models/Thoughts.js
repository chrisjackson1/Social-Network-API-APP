const { Schema, model } = require("mongoose");
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLengthL: 1,
      minlength: 200,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: getDate,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reaction",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
function getDate(date) {
  return date;
}
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = thoughtSchema;
