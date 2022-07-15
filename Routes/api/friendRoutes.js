const router = require('express').Router();

const {
    
    deleteFriend,
    updateFriend
}  = require("../../controllers/friendController");

;

 router.route("/:userId").delete(deleteFriend).put(updateFriend);

module.exports = router;