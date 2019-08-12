const Blog = require("./models/blog");

module.exports.getBlogs = function() {
  return new Promise((resolve, reject) => {
    return Blog.find()
      .then(blogs => {
        resolve(blogs);
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports.getBlog = function(id) {
  return new Promise((resolve, reject) => {
    return Blog.findById(id)
      .then(blog => {
        resolve(blog);
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports.createBlog = function(blog) {
  const { body, title } = blog;
  return new Promise((resolve, reject) => {
    const newBlog = new Blog({
      body,
      title,
    });
    return newBlog
      .save()
      .then(blog => {
        resolve(blog);
      })
      .catch(error => {
        reject(error);
      });
  });
};
