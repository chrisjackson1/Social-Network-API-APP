const  {User,Thought}  = require('../models/Index');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtsId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No Thought with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  createThought(req, res) {
    Thought.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
},
 
 deleteThought(req, res) {
    Thought.findByIdAndDelete({ _id: req.params.thoughtsId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No Thought with this id!' })
          : res.json(application)
      )
      .then(()=> res.json({message: "Thought and associated apps deleted"}))
      .catch((err) => res.status(500).json(err));

  },

  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtsId}, req.body)
      .then(() => res.json({ message: "Thought and associated apps updated!"}))
      .catch ((err ) => res.status(500).json(err));
 }
};
