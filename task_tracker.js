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
   // console.log(event.target);
   const removeButton = event.target.closest('.remove-task');
   
   if (removeButton) {
     let formTaskWrap = removeButton.closest('form.task-wrapper');
 
     if (formTaskWrap) {
      formTaskWrap.remove();
     }
   }
});


//Сортировка задач
const sortTasks = document.querySelector('.sort');

let abc = true;

   sortTasks.addEventListener('click', () => {
      if (abc) {
         sortTasks.className = 'sort-reverse';

         const entryField = document.querySelectorAll('.entry-field');

         let sortT = [];
         entryField.forEach(item => {
            sortT.push(item.value);
         })
         let sortTask = sortT.sort();
         // console.log(sortTask);

         let formTaskWrap = document.querySelectorAll('form.task-wrapper');
         formTaskWrap.forEach(elem => {
            elem.remove();
         });

         sortTask.forEach(item => {
            tasks.insertAdjacentHTML("beforeend", 
               `<form class='task-wrapper'> 
                  <input class='entry-field' value='${item}'>
                  <button type="button" name ='remove-task' class='remove-task'></button>
               </form>`);
         })
         abc = false;
      }


      else {
         const entryField = document.querySelectorAll('.entry-field');

         let sortT = [];
         entryField.forEach(item => {
            sortT.push(item.value);
         });
         let sortTask = sortT.sort().reverse();
         // console.log(sortTask);

         let formTaskWrap = document.querySelectorAll('form.task-wrapper');
         formTaskWrap.forEach(elem => {
            elem.remove();
         });

         sortTask.forEach(item => {
            tasks.insertAdjacentHTML("beforeend", 
               `<form class='task-wrapper'> 
                  <input class='entry-field' value='${item}'>
                  <button type="button" name ='remove-task' class='remove-task'></button>
               </form>`);
         });
         sortTasks.className = 'sort';

         abc = true;
      }
   });