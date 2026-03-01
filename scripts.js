// JSL03 - Console Based Task Manager

// ===============================
// Starter array
// ===============================
const tasks = [
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
// Constants
// ===============================
const MAX_NEW_TASKS = 3;
const VALID_STATUSES = ["todo", "doing", "done"];

// ===============================
// Validation Functions
// ===============================

// Ensures required input is provided
function getRequiredInput(message) {
  let input;

  do {
    input = prompt(message);

    if (!input) {
      alert("This field is required!");
    }
  } while (!input);

  return input.trim();
}

// Ensures valid task status is entered
function getValidStatus(taskNumber) {
  let status;

  do {
    status = prompt(
      `Enter status for Task ${taskNumber} (todo, doing, done):`
    );

    if (!status) {
      alert("Status is required!");
      continue;
    }

    status = status.toLowerCase().trim();

    if (!VALID_STATUSES.includes(status)) {
      alert("Invalid status! Please enter 'todo', 'doing', or 'done'.");
      status = null;
    }
  } while (!status);

  return status;
}

// ===============================
// Utility Functions
// ===============================

// Generates next unique incremental ID
function generateNextId(taskArray) {
  const highestId = Math.max(...taskArray.map(task => task.id));
  return highestId + 1;
}

// Filters completed tasks
function getCompletedTasks(taskArray) {
  return taskArray.filter(task => task.status === "done");
}

// ===============================
// Add New Tasks
// ===============================
for (let i = 1; i <= MAX_NEW_TASKS; i++) {
  const title = getRequiredInput(`Enter title for Task ${i}:`);
  const description = getRequiredInput(`Enter description for Task ${i}:`);
  const status = getValidStatus(i);

  const newTask = {
    id: generateNextId(tasks),
    title,
    description,
    status,
  };

  tasks.push(newTask);
}

// Notify user when limit reached
alert(
  "There are enough tasks on your board, please check them in the console."
);

// ===============================
// Console Output
// ===============================

console.log("All Tasks:");
console.table(tasks);

console.log("Completed Tasks:");
console.table(getCompletedTasks(tasks));
