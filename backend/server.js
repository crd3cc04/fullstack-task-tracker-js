const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const DATA_FILE = './tasks.json';

function loadTasks() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

function saveTasks(tasks) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

app.get('/tasks', (req, res) => {
  res.json(loadTasks());
});

app.post('/tasks', (req, res) => {
  const tasks = loadTasks();
  const newTask = { id: Date.now(), text: req.body.text, completed: false };
  tasks.push(newTask);
  saveTasks(tasks);
  res.json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const tasks = loadTasks();
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  task.completed = req.body.completed;
  saveTasks(tasks);
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  let tasks = loadTasks();
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  saveTasks(tasks);
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
