// JSL03 - Console Based Task Manager

// ===============================
// Starter array
// ===============================
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// ===============================
// Validation functions (from JSL02)
// ===============================

function getValidStatus(taskNumber) {
  let status;

  while (true) {
    status = prompt(
      `Enter status for Task ${taskNumber} (todo, doing, done):`
    );

    if (status === null) {
      alert("Status is required!");
      continue;
    }

    status = status.toLowerCase().trim();

    if (status === "todo" || status === "doing" || status === "done") {
      return status;
    } else {
      alert("Invalid status! Please enter 'todo', 'doing', or 'done'.");
    }
  }
}

function getValidInput(promptText) {
  let input = prompt(promptText);

  while (!input) {
    alert("This field is required!");
    input = prompt(promptText);
  }

  return input.trim();
}

// ===============================
// Add up to 3 new tasks
// ===============================

const MAX_NEW_TASKS = 3;

for (let i = 1; i <= MAX_NEW_TASKS; i++) {
  const title = getValidInput(`Enter title for Task ${i}:`);
  const description = getValidInput(`Enter description for Task ${i}:`);
  const status = getValidStatus(i);

  const lastTask = initialTasks[initialTasks.length - 1];
  const newId = lastTask.id + 1;

  const newTask = {
    id: newId,
    title: title,
    description: description,
    status: status,
  };

  initialTasks.push(newTask);
}

// Alert when task limit is reached
alert(
  "There are enough tasks on your board, please check them in the console."
);

// ===============================
// Filter completed tasks
// ===============================

function getCompletedTasks(tasks) {
  return tasks.filter(task => task.status === "done");
}

// ===============================
// Console output
// ===============================

console.log("All Tasks:", initialTasks);
console.log("Completed Tasks:", getCompletedTasks(initialTasks));
