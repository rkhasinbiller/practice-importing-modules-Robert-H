// taskManager.js

function addTask(tasks, task) {
   tasks.push(task);
}

function listTasks(tasks) {
  if (tasks.length === 0) {
    console.log("No tasks found.");
  } else {
    console.log("Tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

module.exports = {addTask, listTasks};