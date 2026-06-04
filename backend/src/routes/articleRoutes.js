const express = require("express");
const router = express.Router();

const controller = require("../controllers/articleController");

router.get("/", controller.getArticles);
router.post("/", controller.createArticle);
router.put("/:id", controller.updateArticle);
router.delete("/:id", controller.deleteArticle);
router.put("/:id/like", controller.likeArticle);

module.exports = router;