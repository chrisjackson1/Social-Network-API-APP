const router = require('express').Router();

const {
    
    deleteReaction,
    updateReaction
}  = require("../../controllers/reactionController");


 router.route("/:thoughtId").delete(deleteReaction).put(updateReaction);

module.exports = router;