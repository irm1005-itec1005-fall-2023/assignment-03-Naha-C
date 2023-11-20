let todoItems = [];


function addToDoItem(text) {
let todoItems = {
  id: Date.now(),
  text: "This is a todo item",
  completed: false,
}
todoItems.push(todoItems);
}


function removeToDoItem(todoId) {
  for (let i=0 ; i<todoItems.length ; i++) {
    if(todoItems[i].id === todoId) {
      todoItems.splice(i, 1); 
    }
  }
}


function markToDoItemAsCompleted(todoId) {
  for (let i=0 ; i<todoItems.length ; i++) {
    if (todoItems[i].id === todoId) {
      todoItems[i].completed = true;
    }
  }
}

// Function to delete a task from the array
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything, though you can return
// true or false depending on whether the item was successfully deleted
function deleteToDoItem(todoId) {

}


function clearCompletedTasks() {
  for (let i=0 ; i<todoItems.length ; i++) {
    if (todoItems[i].completed === true) {
      todoItems.splice(i, 1);
    }
  }
}


