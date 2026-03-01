// JSL03 - Console Based Task Manager

// Starter array
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

// Validation functions (reused from JSL02)

function getValidStatus(taskNumber) {
    let status;

    while (true) {
        status = prompt(`Enter status for Task ${taskNumber} (todo, doing, done):`);

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
