document.addEventListener('DOMContentLoaded', () => {
    const taskTitleInput = document.getElementById('taskTitleInput');
    const taskDescInput = document.getElementById('taskDescInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', addTask);
  
    function addTask() {
      const taskTitle = taskTitleInput.value.trim();
      const taskDesc = taskDescInput.value.trim();
  
      if (taskTitle === '' || taskDesc === '') {
        alert('Please enter both a task title and description.');
        return;
      }
  
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item');
      taskItem.innerHTML = `
        <div class="task-content">
          <strong class="task-title">${taskTitle}</strong>
          <p class="task-desc">${taskDesc}</p>
        </div>
        <div class="task-actions">
          <button class="task-btn complete-btn">✔</button>
          <button class="task-btn delete-btn">✖</button>
        </div>
      `;
  
      taskList.appendChild(taskItem);
      taskTitleInput.value = '';
      taskDescInput.value = '';
  
      const completeBtn = taskItem.querySelector('.complete-btn');
      const deleteBtn = taskItem.querySelector('.delete-btn');
  
      completeBtn.addEventListener('click', () => {
        taskItem.querySelector('.task-content').classList.toggle('completed');
      });
  
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
      });
    }
  });
  