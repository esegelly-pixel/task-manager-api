const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [
  {
    id: 1,
    title: "Complete backend project",
    description: "Finish the Express.js Task Manager API",
    status: "pending"
  },
  {
    id: 2,
    title: "Test API with Postman",
    description: "Test all CRUD endpoints",
    status: "completed"
  }
];

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Task Manager API",
    endpoints: {
      getAllTasks: "GET /tasks",
      getTask: "GET /tasks/:id",
      createTask: "POST /tasks",
      updateTask: "PUT /tasks/:id",
      deleteTask: "DELETE /tasks/:id"
    }
  });
});

app.get("/tasks", (req, res) => {
  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks
  });
});

app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  res.status(200).json({
    success: true,
    data: task
  });
});

app.post("/tasks", (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Title and description are required"
    });
  }

  const taskStatus = status || "pending";

  if (!["pending", "completed"].includes(taskStatus)) {
    return res.status(400).json({
      success: false,
      message: "Status must be either pending or completed"
    });
  }

  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description,
    status: taskStatus
  };

  tasks.push(newTask);

  res.status(201).json({
    success: true,
    message: "Task created successfully",
    data: newTask
  });
});

app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  const { title, description, status } = req.body;

  if (!title || !description || !status) {
    return res.status(400).json({
      success: false,
      message: "Title, description and status are required"
    });
  }

  if (!["pending", "completed"].includes(status)) {
    return res.status(400).json({
      success: false,
      message: "Status must be either pending or completed"
    });
  }

  tasks[taskIndex] = { id, title, description, status };

  res.status(200).json({
    success: true,
    message: "Task updated successfully",
    data: tasks[taskIndex]
  });
});

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0];

  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
    data: deletedTask
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Task Manager API running on http://localhost:${PORT}`);
});
