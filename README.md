# 📌 Full Stack Task Tracker (Vanilla JavaScript)

A clean, lightweight **full‑stack web application** built with **vanilla JavaScript**, **Node.js**, and **Express**. This project demonstrates real‑world CRUD operations, frontend‑backend communication, and clean project structure — perfect for showcasing full‑stack fundamentals on a developer portfolio.

---

## 🚀 Features

- Add new tasks  
- Mark tasks as complete or incomplete  
- Delete tasks  
- Persistent storage using a JSON file  
- Simple, clean UI  
- Fully functional backend API  
- Vanilla JavaScript frontend (no frameworks)

---

## 🗂️ Project Structure

```
fullstack-task-tracker-js/
│
├── backend/
│   ├── server.js        # Express server + CRUD routes
│   └── tasks.json       # Persistent storage
│
├── frontend/
│   ├── index.html       # UI layout
│   ├── style.css        # Styling
│   └── app.js           # Frontend logic + fetch API calls
│
└── README.md
```

---

## 🛠️ Tech Stack

### **Frontend**
- HTML  
- CSS  
- Vanilla JavaScript  
- Fetch API  

### **Backend**
- Node.js  
- Express  
- CORS  
- File‑based storage (`tasks.json`)

---

## ▶️ How to Run the App

### **1. Start the backend**

From the `backend` folder:

```bash
npm install
node server.js
```

The server runs on:

```
http://localhost:3000
```

### **2. Open the frontend**

Open `frontend/index.html` in your browser.

The app will automatically load tasks from the backend.

---

## 📡 API Endpoints

### **GET /tasks**
Returns all tasks.

### **POST /tasks**
Creates a new task.  
Body:

```json
{ "text": "My new task" }
```

### **PUT /tasks/:id**
Updates a task’s completion status.  
Body:

```json
{ "completed": true }
```

### **DELETE /tasks/:id**
Deletes a task by ID.

---

## 🧠 How It Works

- The frontend uses `fetch()` to call the backend API.  
- The backend reads/writes to `tasks.json` for persistence.  
- Tasks are rendered dynamically in the DOM.  
- Buttons trigger API calls for update/delete actions.  

This mirrors real full‑stack workflows without requiring a database.

---

## 🎨 UI Preview

- Clean, minimal layout  
- Add tasks with a single click  
- “Done” toggles completion  
- “Delete” removes tasks  
- Completed tasks show a line‑through  

---

## 📈 Why This Project Matters

This app demonstrates:

- Full‑stack architecture  
- REST API design  
- State management  
- DOM manipulation  
- Asynchronous JavaScript  
- Clean project organization  

It’s a strong addition to a GitHub portfolio, especially for junior engineering or cybersecurity candidates transitioning into software roles.

---

## 📌 Future Enhancements (Optional)

- LocalStorage fallback  
- Dark mode  
- Drag‑and‑drop task ordering  
- Deploy backend (Render) + frontend (Netlify/Vercel)  
- Add user authentication  
- Add categories or due dates  
# fullstack-task-tracker-js