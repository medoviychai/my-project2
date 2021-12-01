const task = document.querySelector('.task-wrapper');
const buttonAddTask = document.querySelector('.add');
const tasks = document.querySelector('.task');


//Добавление задачи
buttonAddTask.addEventListener('click', (event) => {
   event.preventDefault();
   
      tasks.insertAdjacentHTML("beforeend", 
      `<form class='task-wrapper'> 
         <input class='entry-field'>
         <button type="button" name ='remove-task' class='remove-task'></button>
      </form>`);
})


//Удаление задачи
document.addEventListener("click", event => {
   //(элемент, на котором событие сработало)
   // console.log(event.target);
   const removeButton = event.target.closest('.remove-task');
   
   if (removeButton) {//если мы нажали на элемент с классом remove-task
     //то можно "выпасть до родительской формы:"
     let formTaskWrap = removeButton.closest('form.task-wrapper');
 
     if (formTaskWrap) {
      formTaskWrap.remove();
     }
   }
});











//Сортировка задач
const sortTasks = document.querySelector('.sort');

// sortTasks.addEventListener('click', () => {
//    sortTasks.className = 'sort-reverse';


   // let sort = Array.from(entryField).slice(1).sort((a, b) => a.value > b.value ? 1 : -1); 
   sortTasks.addEventListener('click', () => {
      sortTasks.className = 'sort-reverse';

      const entryField = document.querySelectorAll('.entry-field');

      let sortT = [];
      entryField.forEach(item => {
         sortT.push(item.value);
      })
      let sortTask = sortT.sort();
      console.log(sortTask);


      // let sort = Array.from(entryField.values).slice(1)
      // console.log(sort);
     
      sortTask.forEach(item => {
         // entryField.value = item;
         // console.log(entryField.value);
         // console.log(item);
         const t = document.createElement('input');
         t.className = 'entry-field';
         t.value = item;

         const tasksAll = document.querySelectorAll('.task-wrapper');
         tasksAll.forEach(item => {

            item.append(t);
            console.log(item);
         })

         // tasksAll.forEach(item => {
         //    entryField.forEach(elem => {
         //       item.replaceChild(sortTasks, elem);

         //    })

         // entryField.forEach(elem => {
         //    elem.replaceWith(sortTask)
         // })
         })
      })

      //  sortTask.reverse();



   
   // let sort = [document.querySelectorAll('.entry-field')]
   // console.log(sort.textContent);


   // let sortTask = [...document.querySelector('.entry-field').value].sort();
 
   // sortTasks.addEventListener('click', () => {
   //    sortTasks.className = 'sort-reverse';
   //    sortTask.forEach(elem => task.append(elem));
   //    sortTask.reverse();
   // });
// })

const entryField = document.querySelectorAll('.entry-field');
