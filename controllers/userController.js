const { User } = require("../models");

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.findByIdAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User with this id!" })
          : res.json(user)
      )
      .then(() => res.json({ message: "User and associated apps deleted" }))
      .catch((err) => res.status(500).json(err));
  },

  //fix update user
  addFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId}, 
      
      {$push: { friends: req.params.friendId }},
      {runValidators: true, new: true })
      .then(() => res.json({ message: "Friend and associated apps updated!" }))
      .catch((err) => res.status(500).json(err));
  },

  deleteFriend(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true } //might not need to add ` runValidators: true,  ` before new
    )
        .then((user) => {
            res.status(200).json(user)
        })
        .catch((err) => res.status(500).json(err));
},

  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body)
      .then(() => res.json({ message: "User and associated apps updated!" }))
      .catch((err) => res.status(500).json(err));
  },
};
