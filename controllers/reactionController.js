const Reaction = require('../models/Reaction');

module.exports = {

deleteReaction(req, res) {
    Reaction.findOneAndUpdate(
      { _id: req.params.userId })
    
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No Reaction with this id!' })
          : res.json(application)
      )
      .then(()=> res.json({message: "Reaction and associated apps deleted"}))
      .catch((err) => res.status(500).json(err));

  },

  updateReaction(req, res) {
    Reaction.findOneAndUpdate(
      { _id: req.params.userId}, req.body)
      .then(() => res.json({ message: "Reaction and associated apps updated!"}))
      .catch ((err ) => res.status(500).json(err));
 }

};
