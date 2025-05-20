const fs = require('fs');

function saveTasks(filePath, tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');

}

function loadTasks(filePath) {
    if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } else {
    return [];
  } } catch (error) {
    console.error("Error loading tasks:", error);
    return [];
  }



module.exports = {addTask, listTasks};