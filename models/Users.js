const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    validate: {isEmail, "invalid email",}

  },
  thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: "Thought",
      }
  ],
 friends: [
     {
         type: Schema.Types.ObjectId,
         ref: "User",
     }
 ],
},

{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);
    userSchema 
    .virtual("fullname")
    //Getter
    .get(function (){
        return friends.length;
    })
    .set(function (v){
        const first = v.split(" ")[0];
        const first = v.split(" ")[1];
        this.set = ({first, last});
    });

    //Intializae our User model

 const User = model("user", userSchema);

  module.exports = userSchema;