// app.js

const path = require('path');
const { addTask, listTasks } = require('./taskManager');
const { loadTasks, saveTasks } = require('./fileHandler');

const filePath = path.join(__dirname, 'tasks.json');


let tasks = loadTasks(filePath);


addTask(tasks, "Go to gym");
addTask(tasks, "Pick up groceries");
addTask(tasks, "Make bed");


listTasks(tasks);


saveTasks(filePath, tasks);
