const PostUser = require("../models/PostUser");

const router = require("express").Router();

router.get("/users", async (req, res) => {
  try {
    const posts = await PostUser.find();
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
});

router.post("/users", (req, res) => {
  const port = new PostUser({
    email: req.body.email,
    password: req.body.password,
  });
  port
    .save()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});
router.delete("/users/:id", async (req, res) => {
  let params = req.params.id;

  try {
    const posts = await PostUser.findById(params).remove().exec();
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
