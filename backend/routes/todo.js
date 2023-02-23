const express = require("express");
const router = express.Router();

router.get("/", require("./../controllers/todo").getTodos);

router.post("/todo/new", require("./../controllers/todo").saveTodo);

router.put("/todo/update/:id", require("./../controllers/todo").updateTodo);

router.get("/todo/complete/:id", require("./../controllers/todo").getTodo);

router.delete("/todo/delete/:id", require("./../controllers/todo").deleteTodo);


module.exports = router;
