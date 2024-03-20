const express = require("express");
const {registerUser} = require("../controllers/userController");
const {authUser}= require("../controllers/userController")
const router = express.Router();

// router.route('/').post(registerUser)
router.route('/').post(registerUser)
router.get('/login', authUser)

module.exports = router



// const express = require("express");
// const {
//   registerUser,
//   authUser,
//   allUsers,
// } = require("../controllers/userControllers");
// const { protect } = require("../middleware/authMiddleware");

// const router = express.Router();

// router.route("/").get(protect, allUsers);
// router.route("/").post(registerUser);
// router.post("/login", authUser);

// module.exports = router;