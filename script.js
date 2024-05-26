//your code here

document.getElementById('addTodoBtn').addEventListener('click', function() {
    // Get the input element and its value
    const inputElement = document.getElementById('newTodoInput');
    const newTodo = inputElement.value.trim();

    // Validate the input to ensure it is not empty
    if (newTodo === '') {
        alert('Please enter a to-do item.');
        return;
    }

    // Create a new list item (li) element
    const li = document.createElement('li');
    li.textContent = newTodo;

    // Add the new list item to the ordered list (ol)
    document.getElementById('todoList').appendChild(li);

    // Clear the input field
    inputElement.value = '';
});
