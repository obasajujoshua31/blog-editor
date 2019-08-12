const { createBlog, getBlog, getBlogs } = require("./service");

module.exports.getAllBlogsInTheApplication = async function(req, res) {
  const blogs = await getBlogs();
  return res.status(200).json({
    success: true,
    blogs: blogs,
  });
};

module.exports.getOneBlog = async function(req, res) {
  return res.status(200).json({
    success: true,
    blog: await getBlog(req.params.id),
  });
};

module.exports.createNewBlog = async function(req, res) {
  const { title, body } = req.body;
  const newBlog = {
    title,
    body,
  };
  const createdBlog = await createBlog(newBlog);
  return res.status(200).json({
    success: true,
    message: "Blog created successfully",
    blog: createdBlog,
  });
};
