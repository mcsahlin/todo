import { Task } from "./modules/task";

//#region G
let tasklist = [];
tasklist.push("Laga husknuten");
tasklist.push("Kasta rutor");
tasklist.push("Fila avgasrör");
let gList = document.createElement("ul");
document.body.appendChild(gList);
for (let i = 0; i < tasklist.length; i++) {
 let newTask = document.createElement("li");
 newTask.id = i;
 newTask.classList = "todo";
 newTask.innerHTML = tasklist[i];
 gList.appendChild(newTask);
}
gList.addEventListener("click", (e)=>{
 let li = e.target;
 li.classList.add("todo--done");
});
//#endregion G

//#region VG
let tasks = [new Task("Första", false), new Task("Andra", false), new Task("Tredje", true)];
let list = createHtml("ul");
document.body.appendChild(list);

list.addEventListener("click", (e)=>{
 let li = e.target;
 let index = li.id;
 if (!tasks[index].done){
  tasks[index].done = true;
 }
 else {
  tasks[index].done = false;
 }
 refreshList();
});

function createHtml(tag){
 return document.createElement(tag);
};

function toggleCompletion(task, listItem){
 listItem.classList.add("todo");
 if (tasks[task].done){
  listItem.classList.add("todo--done");
 }
 else {
  listItem.classList.remove("todo--done"); 
 }
};

function refreshList(){
 list.innerHTML = "";
 for (let i = 0; i < tasks.length; i++) {
  let todo = createHtml("li");
  todo.id = i;
  toggleCompletion(i, todo);
  todo.innerHTML = tasks[i].description;
  list.appendChild(todo);
 }
}
refreshList();
//#endregion VG