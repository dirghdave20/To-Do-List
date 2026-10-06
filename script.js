const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add new task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.classList.add('delete-btn');
    delBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

// Allow pressing Enter key to add task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});
