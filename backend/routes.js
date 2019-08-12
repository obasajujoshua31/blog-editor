const { Router } = require("express");
const {
  getAllBlogsInTheApplication,
  getOneBlog,
  createNewBlog,
} = require("./controller");

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to blogs API",
  });
});
router
  .route("/blogs")
  .get(getAllBlogsInTheApplication)
  .post(createNewBlog);
router.route("/blogs/:id").get(getOneBlog);

module.exports = router;
