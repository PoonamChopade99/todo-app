const TodoModel = require("./../models/todo");

exports.getTodos = async (req, res) => {
  const todos = await TodoModel.find();
  console.log(todos);
  res.json(todos);
};

exports.saveTodo = async (req, res) => {
  try {
    const todo = new TodoModel({
      text: req.body.text,
      complete: req.body.complete,
    });
    await todo.save();
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await TodoModel.findById(req.params.id);
    todo.complete = !todo.complete;
     todo.save();
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTodo = async (req, res) => {
try {
  const result = await TodoModel.findByIdAndDelete(req.params.id);
  res.json({ result });
  
} catch (error) {
  console.log(error);
}
};

exports.updateTodo = async (req, res) => {
  const todo = await TodoModel.findById(req.params.id);
  todo.text = req.body.text;
  todo.save();
  res.json(todo);
};
