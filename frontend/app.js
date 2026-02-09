const API_URL = 'http://localhost:3000/tasks';

async function loadTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  const list = document.getElementById('taskList');
  list.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span style="text-decoration:${task.completed ? 'line-through' : 'none'}">
        ${task.text}
      </span>
      <div>
        <button onclick="toggleTask(${task.id}, ${!task.completed})">
          ${task.completed ? 'Undo' : 'Done'}
        </button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return;

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });

  input.value = '';
  loadTasks();
}

async function toggleTask(id, completed) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });
  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  loadTasks();
}

loadTasks();
