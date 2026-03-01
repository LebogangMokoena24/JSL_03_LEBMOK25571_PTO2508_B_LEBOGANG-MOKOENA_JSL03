# JSL_03_LEBMOK25571_PTO2508_B_LEBOGANG-MOKOENA_JSL03
# JSL03 – Console-Based Task Manager

## 📌 Project Description

This project is a console-based task management system built using JavaScript.  
It allows users to add tasks through browser prompts, stores them as structured objects inside an array, and provides filtering functionality to view completed tasks.

The focus of this project is array manipulation, object creation, validation logic, and clean console output.

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## ✨ Features

- Stores tasks as objects inside an array
- Generates unique incremental IDs for each new task
- Allows users to add up to 3 new tasks
- Validates user input for title, description, and status
- Restricts status values to: `todo`, `doing`, `done`
- Alerts the user when the task limit is reached
- Logs all tasks in the console
- Filters and logs only completed tasks under "Completed Tasks"

---

## 🚀 Setup Instructions

1. Clone the repository:
   
2. Open the project folder.

3. Open `index.html` in your browser.

---

## ▶ Usage Instructions

1. When the page loads, you will be prompted to enter:
- Task title
- Task description
- Task status (`todo`, `doing`, or `done`)

2. You may add up to 3 new tasks.

3. After the limit is reached, an alert will appear:
   
4. Open the browser console to view:
- All tasks
- Completed tasks only

---

## 📎 Example Console Output
All Tasks:
┌─────┬────┬───────────────────────────┬───────────────────────────────┬───────┐
│ id  │ …  │ title                     │ description                   │ …     │
└─────┴────┴───────────────────────────┴───────────────────────────────┴───────┘

Completed Tasks:
┌─────┬────┬────────────────────────────┬───────────────────────────────┬───────┐
│ id  │ …  │ title                      │ description                   │ …     │
└─────┴────┴────────────────────────────┴───────────────────────────────┴───────┘
---

## 👩‍💻 Author

Created by Lebogang Mokaoena as part of the JSL03 project challenge.
