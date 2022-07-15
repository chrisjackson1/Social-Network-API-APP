const { User } = require("../models");

module.exports = {

deleteFriend(req, res) {
    User.findByIdAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No Friend with this id!" })
          : res.json(user)
      )
      .then(() => res.json({ message: "Friend and associated apps deleted" }))
      .catch((err) => res.status(500).json(err));
  },

  //fix update user

  addFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body)
      .then(() => res.json({ message: "Friend and associated apps updated!" }))
      .catch((err) => res.status(500).json(err));
  },
};
